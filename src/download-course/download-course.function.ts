import { downloadVideo } from '../download-video';
import { loadVideoDownloadOptions } from '../load-video-download-options';
import { loadVideosList } from '../load-videos-list';
import { promptCourseUrl } from '../prompt-course-url';
import { promptDownloadFolder } from '../prompt-download-folder';
import { selectVideoSize } from '../select-video-size';
import { messageService, ProgressiveStream, Video } from '../shared';

export async function downloadCourse(): Promise<void> {
  const courseUrl = await promptCourseUrl();
  const videosList = await loadVideosList(courseUrl);

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

  const downloadFolderPath = await promptDownloadFolder(__dirname);

  messageService.out({
    text: `Download path: ${downloadFolderPath}`,
    type: 'success',
  });

  await Promise.all(
    downloadableVideos.map(async ({ progressiveStreams, title }, index) => {
      const selectedSteam = progressiveStreams.find(({ width }) => width === selectedSize) as ProgressiveStream;
      const fileName = `${++index} ${title.replace(/[/:*?"<>|~#%&+{}\-\\]/g, '')}.${selectedSteam.mediaType.split('/')[1]}`;
      const videoUrl = selectedSteam?.streamingLocations[0].url as string;
      const savePath = /\/$/.test(downloadFolderPath) ? `${downloadFolderPath}${fileName}` : `${downloadFolderPath}/${fileName}`;
      return downloadVideo(videoUrl, savePath, fileName);
    })
  );

  messageService.out({
    text: '\nDownloading finished.',
    type: 'success',
  });
}

function formatVideosListForDisplay(videos: Video[]): string {
  return `\nFound ${videos.length} videos:\n\n${videos.map(({ title }, index) => `${++index}. ${title}.`).join('\n')}`;
}
