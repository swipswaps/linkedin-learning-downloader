import { ProgressiveStream } from '../../shared/models/';

export interface DownloadableVideo {
  title: string;
  progressiveStreams: ProgressiveStream[];
}
