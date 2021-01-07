import { messageService, Video, VideosList } from '../shared';
import { loadVideo } from './load-video.function';
import { DownloadableVideo } from '../shared';
import { authService } from '../auth/';

export async function loadVideoDownloadOptions(videosList: VideosList): Promise<DownloadableVideo[]> {
  const { parentSlug } = videosList;
  const q = 'slugs';
  const headers = await authService.getAuthHeaders();

  /** Basically a crutch against 429 error which prevents too many connections */
  const timeoutStep = 15000;
  let msTimeout = 45000;

  const downloadableVideos: DownloadableVideo[] = [];

  let failedVideoRequests: Video[] = [];
  do {
    const videos = failedVideoRequests.length ? failedVideoRequests : videosList.videos;

    for (const video of videos) {
      messageService.out({
        text: `Requesting video options for ${video.title}...`,
        type: 'info',
      });
      try {
        const vid = await loadVideo(video, { parentSlug, q, slug: video.slug }, headers);
        downloadableVideos.push(vid);
        failedVideoRequests = failedVideoRequests.filter(({ slug }) => slug !== video.slug);
        messageService.out({
          text: 'Success!',
          type: 'success',
        });
      } catch (e) {
        const isError429 = e?.response?.status === 429;
        if (!isError429) {
          throw e;
        } else {
          messageService.out({
            text: 'Encountered error 429: too many requests',
            type: 'error',
          });
        }

        failedVideoRequests.push(video);
        await new Promise((resolve) => {
          messageService.out({
            text: `\nSleeping for ${msTimeout / 1000} seconds before continuing to prevent 429 error\nVideos resolved: ${
              downloadableVideos.length
            } / ${videosList.videos.length}`,
            type: 'info',
          });
          msTimeout += timeoutStep;
          setTimeout(() => resolve(true), msTimeout);
        });
      }
    }

    if (failedVideoRequests.length) {
      messageService.out({
        text: `Retrying requests for ${failedVideoRequests.length} videos...`,
        type: 'info',
      });
    }
  } while (failedVideoRequests.length);

  return downloadableVideos;
}
