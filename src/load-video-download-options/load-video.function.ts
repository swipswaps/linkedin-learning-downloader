import { Video, apiService, VideoApiResponse, DownloadableVideo } from '../shared';
import { VideoRequestParams, VideoRequestHeaders } from './models';

export async function loadVideo(video: Video, params: VideoRequestParams, headers: VideoRequestHeaders): Promise<DownloadableVideo> {
  const { data: videoResponse } = await apiService.get<VideoApiResponse, VideoRequestParams, VideoRequestHeaders>(
    'https://www.linkedin.com/learning-api/videos',
    params,
    headers
  );

  const downloadableVideo: DownloadableVideo = {
    title: video.title,
    progressiveStreams: videoResponse.elements
      .map((i) => i.presentation.videoPlay.videoPlayMetadata.progressiveStreams)
      .reduce((a, b) => [...a, ...b], []),
  };

  return downloadableVideo;
}
