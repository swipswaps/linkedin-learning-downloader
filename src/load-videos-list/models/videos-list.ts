import { Video } from './video';

export interface VideosList {
  listName: string;
  parentSlug: string;
  videos: Video[];
}
