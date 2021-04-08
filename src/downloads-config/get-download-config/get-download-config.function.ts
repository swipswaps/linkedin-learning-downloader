import { promises, existsSync } from 'fs';

import { DOWNLOAD_CONFIG_NAME } from '../download-config-name.const';
import { DownloadConfig } from '../../shared/models';

export async function getDownloadConfig(rootDir: string): Promise<DownloadConfig | null> {
  const configPath = `${rootDir}/${DOWNLOAD_CONFIG_NAME}`;

  if (!existsSync(configPath)) {
    return null;
  }

  try {
    const contents = await promises.readFile(configPath);
    return JSON.parse(contents.toString()) as DownloadConfig;
  } catch (e) {
    return null;
  }
}
