import { generateFileName, downloadFile, ProgressiveStream, messageService, DownloadableVideo } from '..';
import { getFilePath } from '../get-file-path';
import { YayOrNay } from '../models';

export async function downloadVideos(
  downloadableVideos: DownloadableVideo[],
  selectedSize: number,
  downloadFolderPath: string,
  doAutoRetryFailed?: YayOrNay
): Promise<void> {
  let totalDownloads: number = 0;
  const totalVideos = downloadableVideos.length;
  const failedDownloads: string[] = [];
  const failedVideos: DownloadableVideo[] = [];

  await Promise.all(
    downloadableVideos.map(async (i, index) => {
      const selectedSteam = i.progressiveStreams.find(({ width }) => width === selectedSize) as ProgressiveStream;
      const fileName = `${generateFileName(index, i.title)}.${selectedSteam.mediaType.split('/')[1]}`;
      const videoUrl = selectedSteam?.streamingLocations[0].url as string;
      const savePath = getFilePath(downloadFolderPath, fileName);
      try {
        await downloadFile(videoUrl, savePath, fileName);
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
        failedVideos.push(i);
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

    const doRetryFailedDownloads =
      doAutoRetryFailed ??
      (await messageService.promtUserUntilValidInput(
        {
          text: 'Retry failed downloads (y/n)? ',
          type: 'prompt',
        },
        (userInput: string) => /^[yn]$/i.test(userInput)
      ));

    if (/y/i.test(doRetryFailedDownloads)) {
      await downloadVideos(failedVideos, selectedSize, downloadFolderPath);
    }
  }
}
