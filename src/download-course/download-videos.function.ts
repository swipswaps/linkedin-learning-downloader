import { downloadVideo } from '../download-video';
import { ProgressiveStream, messageService, DownloadableVideo } from '../shared';
import { generateFileName, getFilePath } from './shared';

export async function downloadVideos(downloadableVideos: DownloadableVideo[], selectedSize: number, downloadFolderPath: string) {
  let totalDownloads: number = 0;
  const totalVideos = downloadableVideos.length;
  const failedDownloads: string[] = [];
  await Promise.all(
    downloadableVideos.map(async (i, index) => {
      const selectedSteam = i.progressiveStreams.find(({ width }) => width === selectedSize) as ProgressiveStream;
      const fileName = `${generateFileName(index, i.title)}.${selectedSteam.mediaType.split('/')[1]}`;
      const videoUrl = selectedSteam?.streamingLocations[0].url as string;
      const savePath = getFilePath(downloadFolderPath, fileName);
      try {
        await downloadVideo(videoUrl, savePath, fileName);
        ++totalDownloads;
        messageService.out({
          text: `File successfully downloaded: ${fileName}`,
          type: 'success',
        });
        messageService.out({
          text: `Downloads progress: ${totalDownloads} / ${totalVideos}`,
          type: 'info',
        });
      } catch (e) {
        messageService.out({
          text: `Error saving video ${fileName}: ${e.toString()}`,
          type: 'error',
        });
        failedDownloads.push(`${fileName}\n${videoUrl}`);
      }
    })
  );

  messageService.out({
    text: `\nFinished downloading videos: ${totalDownloads} / ${downloadableVideos.length}`,
    type: 'success',
  });

  if (failedDownloads.length) {
    messageService.out({
      text: `\nUnfortunately, ${failedDownloads.length} videos could not be downloaded: ${failedDownloads.join('\n')}`,
      type: 'error',
    });
  }
}
