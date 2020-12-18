import { WELCOME_MESSAGE } from './constants';
import { loadVideosList, Video } from './load-videos-list';
import { promptCourseUrl } from './prompt-course-url';
import { messageService } from './shared';

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
}

function formatVideosListForDisplay(videos: Video[]): string {
  return `\nFound ${videos.length} videos:\n\n${videos.map(({ title }, index) => `${++index}. ${title}.`).join('\n')}`;
}
