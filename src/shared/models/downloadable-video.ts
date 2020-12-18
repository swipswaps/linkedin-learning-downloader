import { ProgressiveStream } from './video-api-response';

export interface DownloadableVideo {
  title: string;
  progressiveStreams: ProgressiveStream[];
}
