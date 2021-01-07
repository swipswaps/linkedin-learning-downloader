import { existsSync, mkdirSync } from 'fs';

import { messageService } from '../shared';

export async function promptDownloadFolder(currentPath: string): Promise<string> {
  let path = '';

  do {
    let inputPath = await messageService.promptUserInput({
      text: '\nPlease enter the path to the download folder:\n',
      type: 'prompt',
    });

    if (/^\..+$/.test(inputPath)) {
      inputPath = `${currentPath}/${/[\\/]/.test(inputPath[1]) ? inputPath.slice(2) : inputPath}`;
    }

    if (!existsSync(inputPath)) {
      messageService.out({
        text: '\nFolder does not exist, trying to create it...',
        type: 'info',
      });

      try {
        mkdirSync(inputPath);
        messageService.out({
          text: 'Folder created!',
          type: 'success',
        });
      } catch (e) {
        messageService.out({
          text: `Error while trying to create folder: ${e.toString()}`,
          type: 'error',
        });
        continue;
      }
    }

    path = inputPath;
  } while (!path);

  return path;
}
