import { createWriteStream } from 'fs';

import { apiService, messageService } from '../shared';

export async function downloadVideo(url: string, path: string, fileName: string): Promise<void> {
  const writer = createWriteStream(path);

  messageService.out({
    text: `Downloading ${fileName} from \n${url}`,
    type: 'info',
  });
  const { data } = await apiService.downloadVideoFile(url);

  return new Promise((resolve, reject) => {
    data.pipe(writer);
    let error: Error | null = null;
    writer.on('error', (err) => {
      error = err;
      writer.close();
      reject(err);
    });
    writer.on('close', () => {
      if (!error) {
        resolve();
      }
    });
  });
}
