import { promises } from 'fs';

import { getSubtitles } from '../get-subtitles';
import { messageService, VideosList } from '../shared';
import { generateFileName, getFilePath } from './shared';

export async function downloadSubtitles(videosList: VideosList, courseUrl: string, downloadFolderPath: string): Promise<void> {
    
  let userChoiceToDownloadSubtitles: string;
  do {
    userChoiceToDownloadSubtitles = await messageService.promptUserInput({
      text: 'Download subtitles? (y/n) ',
      type: 'prompt',
    });
  } while (!/^[yn]$/i.test(userChoiceToDownloadSubtitles));

  if (/^y$/i.test(userChoiceToDownloadSubtitles)) {
    let downloads = 0;
    await Promise.all(
      videosList.videos.map(async ({ title, slug }, i) => {
        const fileName = `${generateFileName(i, title)}.srt`;
        try {
          const subtitles = await getSubtitles(`${courseUrl}/${slug}`);
          if (!subtitles) {
            throw 'Could not find/parse subtitles';
          }
          const savePath = getFilePath(downloadFolderPath, fileName);
          return promises.writeFile(savePath, subtitles).then(() => ++downloads);
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
