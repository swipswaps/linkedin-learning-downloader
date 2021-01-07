import { createWriteStream } from 'fs';

import { apiService, messageService } from '../';

export async function downloadFile(url: string, filePath: string, fileName: string): Promise<void> {
  const writer = createWriteStream(filePath);

  messageService.out({
    text: `Downloading ${fileName} from \n${url.slice(0, 20)}...`,
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
