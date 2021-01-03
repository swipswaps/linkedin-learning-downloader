import { authService } from '../auth';
import { apiService, AuthHeaders } from '../shared';
import { convertDataToSrt } from './convert-data-to-srt/convert-data-to-srt.function';
import { extractSubtitlesFromPage } from './extract-subtitles-from-page/extract-subtitles-from-page.function';

export async function getSubtitles(url: string): Promise<string> {
  const headers = await authService.getAuthHeaders();
  return apiService
    .get<string, void, AuthHeaders>(url, undefined, headers)
    .then(({ data: html }) => extractSubtitlesFromPage(html))
    .then(convertDataToSrt);
}
