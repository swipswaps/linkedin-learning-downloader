import { messageService, Video, VideosList } from '../shared';
import { loadVideo } from './load-video.function';
import { DownloadableVideo } from '../shared';
import { authService } from '../auth/';

export async function loadVideoDownloadOptions(videosList: VideosList): Promise<DownloadableVideo[]> {
  const { parentSlug } = videosList;
  const q = 'slugs';
  const headers = await authService.getAuthHeaders();

  /** Basically a crutch against 429 error which prevents too many connections */
  const msTimeout = 40000;
  const step = 59;
  let currentIndex = 0;
  let videosSlice: Video[];
  const downloadableVideos: DownloadableVideo[] = [];
  do {
    videosSlice = videosList.videos.slice(currentIndex, currentIndex + step);
    currentIndex += step;
    const downloadableBatch = await Promise.all(videosSlice.map(async (i) => loadVideo(i, { parentSlug, q, slug: i.slug }, headers)));
    if (videosSlice.length === step) {
      await new Promise((resolve) => {
        messageService.out({
          text: `\nSleeping for ${msTimeout / 1000} seconds to prevent 429 server error\n`,
          type: 'info'
        });
        setTimeout(() => resolve(true), msTimeout);
      });
    }
    downloadableVideos.push(...downloadableBatch);
  } while (videosSlice.length);

  return downloadableVideos;
}
