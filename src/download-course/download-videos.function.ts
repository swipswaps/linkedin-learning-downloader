import { downloadVideo } from '../download-video';
import { ProgressiveStream, messageService, DownloadableVideo } from '../shared';
import { generateFileName, getFilePath } from './shared';

export async function downloadVideos(downloadableVideos: DownloadableVideo[], selectedSize: number, downloadFolderPath: string) {
  let totalDownloads: number = 0;
  await Promise.all(
    downloadableVideos.map(async ({ progressiveStreams, title }, index) => {
      const selectedSteam = progressiveStreams.find(({ width }) => width === selectedSize) as ProgressiveStream;
      const fileName = `${generateFileName(index, title)}.${selectedSteam.mediaType.split('/')[1]}`;
      const videoUrl = selectedSteam?.streamingLocations[0].url as string;
      const savePath = getFilePath(downloadFolderPath, fileName);
      return downloadVideo(videoUrl, savePath, fileName).then(() => ++totalDownloads);
    })
  );

  messageService.out({
    text: `\nFinished downloading videos: ${totalDownloads} / ${downloadableVideos.length}`,
    type: 'success',
  });
}
