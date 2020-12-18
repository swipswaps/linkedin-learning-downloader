import { WELCOME_MESSAGE } from './constants';
import { loadVideoDownloadOptions } from './load-video-download-options/load-video-download-options.function';
import { loadVideosList } from './load-videos-list';
import { promptCourseUrl } from './prompt-course-url';
import { messageService, Video } from './shared';

export async function main(): Promise<void> {
  messageService.out({
    text: WELCOME_MESSAGE,
    type: 'info',
  });

  const courseUrl = await promptCourseUrl();

  const videosList = await loadVideosList(courseUrl);

  messageService.out({
    text: formatVideosListForDisplay(videosList.videos),
    type: 'success',
  });

  try {
    const downloadableVideos = await loadVideoDownloadOptions(videosList);
    console.log(downloadableVideos);
  } catch (e) {
    messageService.out({
      text: e.toString(),
      type: 'error',
    });
  }
}

function formatVideosListForDisplay(videos: Video[]): string {
  return `\nFound ${videos.length} videos:\n\n${videos.map(({ title }, index) => `${++index}. ${title}.`).join('\n')}`;
}
