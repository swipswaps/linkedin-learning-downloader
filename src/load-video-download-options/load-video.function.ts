import { Video, apiService, VideoApiResponse, DownloadableVideo } from '../shared';
import { VideoRequestParams, AuthHeaders } from './models';

export async function loadVideo(video: Video, params: VideoRequestParams, headers: AuthHeaders): Promise<DownloadableVideo> {
  const { data: videoResponse } = await apiService.get<VideoApiResponse, VideoRequestParams, AuthHeaders>(
    'https://www.linkedin.com/learning-api/videos',
    params,
    headers
  );
  // eslint-disable-next-line no-useless-catch
  try {
    const downloadableVideo: DownloadableVideo = {
      title: video.title,
      progressiveStreams: videoResponse.elements
        .map((i) => {
          return i.presentation.videoPlay.videoPlayMetadata.progressiveStreams;
        })
        .reduce((a, b) => [...a, ...b], []),
    };

    return downloadableVideo;
  } catch (e) {
    throw `${e.toString} \nProblematic videoResponse element:\n ${JSON.stringify(videoResponse)}\n`;
  }
}
