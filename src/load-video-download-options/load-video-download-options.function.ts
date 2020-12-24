import { VideosList } from '../shared';
import { loadVideo } from './load-video.function';
import { DownloadableVideo } from '../shared';
import { authService } from '../auth/';

export async function loadVideoDownloadOptions(videosList: VideosList): Promise<DownloadableVideo[]> {
  const { parentSlug } = videosList;
  const q = 'slugs';
  const headers = await authService.getAuthHeaders();

  return Promise.all(videosList.videos.map(async (i) => loadVideo(i, { parentSlug, q, slug: i.slug }, headers)));
}
