import { existsSync } from 'fs';

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
        text: '\nError: folder does not exist!',
        type: 'error',
      });
      continue;
    }

    path = inputPath;
  } while (!path);

  return path;
}
