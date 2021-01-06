import { VideosList, Video } from '../shared';

export async function loadVideosList(url: string, document: Document): Promise<VideosList> {
  let parentSlug: string;
  parentSlug = url.match(/\/([^/]+)$/)?.[1] as string;

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
