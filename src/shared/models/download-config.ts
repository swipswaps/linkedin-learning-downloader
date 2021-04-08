import { YayOrNay } from './yay-or-nay';

export interface DownloadConfig {
  courses: string[];
  downloadRoot: string;
  videoSize: 640 | 960 | 1280;
  doRetryFailedVideoDownloads: YayOrNay;
  doDownloadSubtitles: YayOrNay;
}
