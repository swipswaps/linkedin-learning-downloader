import { apiService } from '../shared';
import { VideosList } from './models/videos-list';
import { JSDOM } from 'jsdom';
import { Video } from './models/video';

export async function loadVideosList(url: string): Promise<VideosList> {
  let parentSlug: string;
  parentSlug = url.match(/\/([^/]+)$/)?.[1] as string;

  const { data: html } = await apiService.get<string>(url);

  const {
    window: { document },
  } = new JSDOM(html);

  const listName = document.title;

  const videos = Array.from(document.querySelectorAll('.video__link')).map(
    (i) =>
      ({
        title: i.querySelector('.video__title')?.textContent?.trim(),
        slug: i
          .getAttribute('href')
          ?.match(/\/([^/]+)\?/)?.[1]
          .trim(),
      } as Video)
  );

  return {
    listName,
    parentSlug,
    videos,
  };
}
