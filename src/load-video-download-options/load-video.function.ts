import { Video, apiService, VideoApiResponse, DownloadableVideo, messageService } from '../shared';
import { VideoRequestParams, VideoRequestHeaders } from './models';

export async function loadVideo(video: Video, params: VideoRequestParams, headers: VideoRequestHeaders): Promise<DownloadableVideo> {
  const { data: videoResponse } = await apiService.get<VideoApiResponse, VideoRequestParams, VideoRequestHeaders>(
    'https://www.linkedin.com/learning-api/videos',
    params,
    headers
  );

  try {
    const downloadableVideo: DownloadableVideo = {
      title: video.title,
      progressiveStreams: videoResponse.elements
        .map((i) => i.presentation.videoPlay.videoPlayMetadata.progressiveStreams)
        .reduce((a, b) => [...a, ...b], []),
    };

    return downloadableVideo;
  } catch (e) {
    messageService.out({
      text: `Could not locate downloadable video with \nhttps://www.linkedin.com/learning-api/videos?parentSlug=${params.parentSlug}&q=slugs&slug=${params.slug}\nMake sure the video is not behind a premium lock.`,
      type: 'error',
    });
    throw e;
  }
}
