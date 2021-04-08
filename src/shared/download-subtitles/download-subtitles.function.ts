import { promises } from 'fs';

import { getSubtitles } from '../get-subtitles';
import { getFilePath } from '../get-file-path';
import { messageService } from '../message-service';
import { generateFileName } from '../generate-filename';
import { VideosList, YayOrNay } from '../models';

export async function downloadSubtitles(
  videosList: VideosList,
  courseUrl: string,
  downloadFolderPath: string,
  doDownloadSubtitles?: YayOrNay
): Promise<void> {
  const userChoiceToDownloadSubtitles =
    doDownloadSubtitles ??
    (await messageService.promtUserUntilValidInput(
      {
        text: '\nDownload subtitles? (y/n) ',
        type: 'prompt',
      },
      (input: string) => /^[yn]$/i.test(input)
    ));

  if (/^y$/i.test(userChoiceToDownloadSubtitles)) {
    let downloads = 0;
    const total = videosList.videos.length;
    await Promise.all(
      videosList.videos.map(async ({ title, slug }, i) => {
        const fileName = `${generateFileName(i, title)}.srt`;
        try {
          const subtitles = await getSubtitles(`${courseUrl}/${slug}`);
          if (!subtitles) {
            throw 'Could not find/parse subtitles';
          }
          const savePath = getFilePath(downloadFolderPath, fileName);
          await promises.writeFile(savePath, subtitles);
          ++downloads;

          messageService.out({
            text: `File successfully downloaded: ${fileName}`,
            type: 'success',
          });
          messageService.out({
            text: `Subtitles downloaded: ${downloads} / ${total}`,
            type: 'info',
          });
        } catch (e) {
          messageService.out({
            text: `Could not get subtitles for ${fileName}: ${e.toString()}`,
            type: 'error',
          });
        }
      })
    );
    messageService.out({
      text: `\nFinished downloading subtitles: ${downloads} / ${videosList.videos.length}.`,
      type: 'success',
    });
  }
}
