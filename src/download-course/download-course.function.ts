import { loadVideoDownloadOptions } from '../load-video-download-options';
import { loadVideosList } from '../load-videos-list';
import { promptCourseUrl } from '../prompt-course-url';
import { promptDownloadFolder } from '../prompt-download-folder';
import { selectVideoSize } from '../select-video-size';
import { messageService, Video, loadUrlAsDocument } from '../shared';
import { downloadSubtitles } from './download-subtitles/download-subtitles.function';
import { downloadVideos } from './download-videos.function';

export async function downloadCourse(appRoot: string): Promise<void> {
  const courseUrl = await promptCourseUrl();
  const coursePage = await loadUrlAsDocument(courseUrl);
  const videosList = await loadVideosList(courseUrl, coursePage);

  messageService.out({
    text: formatVideosListForDisplay(videosList.videos),
    type: 'success',
  });

  const downloadableVideos = await loadVideoDownloadOptions(videosList);
  const selectedSize = await selectVideoSize(downloadableVideos);

  messageService.out({
    text: `Selected video width: ${selectedSize}`,
    type: 'success',
  });

  const downloadFolderPath = await promptDownloadFolder(appRoot);

  messageService.out({
    text: `Download path: ${downloadFolderPath}`,
    type: 'success',
  });

  await downloadVideos(downloadableVideos, selectedSize, downloadFolderPath);
  await downloadSubtitles(videosList, courseUrl, downloadFolderPath);
}

function formatVideosListForDisplay(videos: Video[]): string {
  return `\nFound ${videos.length} videos:\n\n${videos.map(({ title }, index) => `${++index}. ${title}.`).join('\n')}`;
}
