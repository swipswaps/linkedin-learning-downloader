import { promises } from 'fs';

import { getSubtitles } from '../../get-subtitles';
import { messageService, VideosList } from '../../shared';
import { generateFileName, getFilePath } from '../shared';

export async function downloadSubtitles(videosList: VideosList, courseUrl: string, downloadFolderPath: string): Promise<void> {
  const userChoiceToDownloadSubtitles = await messageService.promtUserUntilValidInput(
    {
      text: 'Download subtitles? (y/n) ',
      type: 'prompt',
    },
    (input: string) => /^[yn]$/i.test(input)
  );

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
            type: 'success',
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
