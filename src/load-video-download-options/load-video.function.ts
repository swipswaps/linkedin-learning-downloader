import { Video, apiService, VideoApiResponse, DownloadableVideo } from '../shared';
import { VideoRequestParams, AuthHeaders } from './models';

export async function loadVideo(video: Video, params: VideoRequestParams, headers: AuthHeaders): Promise<DownloadableVideo> {
  //try {
  const { data: videoResponse } = await apiService.get<VideoApiResponse, VideoRequestParams, AuthHeaders>(
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
