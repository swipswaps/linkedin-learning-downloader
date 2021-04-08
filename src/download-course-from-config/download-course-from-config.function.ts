import { mkdirSync } from 'fs';

import { authService } from '../auth';
import { downloadExercises } from '../download-exercises';
import { loadVideoDownloadOptions } from '../load-video-download-options';
import { loadVideosList } from '../load-videos-list';
import { apiService, DownloadConfig, parseAxiosResponseToDoc, downloadVideos, downloadSubtitles, messageService } from '../shared';

export async function downloadCourseFromConfig(config: DownloadConfig): Promise<void> {
  const { courses, downloadRoot, videoSize, doDownloadSubtitles, doRetryFailedVideoDownloads } = config;

  const downloadFolder = /^.+\/$/.test(downloadRoot) ? downloadRoot : `${downloadRoot}/`;

  for (const courseUrl of courses) {
    messageService.out({
      text: `Downloading ${courseUrl}`,
      type: 'info',
    });

    const coursePage = await apiService.get(courseUrl).then(parseAxiosResponseToDoc);

    const videosList = await loadVideosList(courseUrl, coursePage);
    const downloadableVideos = await loadVideoDownloadOptions(videosList);

    const downloadFolderPath = downloadFolder + courseUrl.replace(/^.+\//, '');

    mkdirSync(downloadFolderPath);

    messageService.out({
      text: 'Folder created!',
      type: 'success',
    });

    await downloadVideos(downloadableVideos, videoSize, downloadFolderPath, doRetryFailedVideoDownloads);

    const authHeaders = await authService.getAuthHeaders();
    const authCoursePage = await apiService.get(courseUrl, undefined, authHeaders).then(parseAxiosResponseToDoc);

    await downloadExercises(authCoursePage, downloadFolderPath);
    await downloadSubtitles(videosList, courseUrl, downloadFolderPath, doDownloadSubtitles);
  } /* 
  courses.forEach(async (courseUrl) => {
    const coursePage = await apiService.get(courseUrl).then(parseAxiosResponseToDoc);

    const videosList = await loadVideosList(courseUrl, coursePage);
    const downloadableVideos = await loadVideoDownloadOptions(videosList);

    const downloadFolderPath = downloadFolder + courseUrl.replace(/^.+\//, '');

    mkdirSync(downloadFolderPath);
    messageService.out({
      text: 'Folder created!',
      type: 'success',
    });

    await downloadVideos(downloadableVideos, videoSize, downloadFolderPath, doRetryFailedVideoDownloads);

    const authHeaders = await authService.getAuthHeaders();
    const authCoursePage = await apiService.get(courseUrl, undefined, authHeaders).then(parseAxiosResponseToDoc);

    await downloadExercises(authCoursePage, downloadFolderPath);
    await downloadSubtitles(videosList, courseUrl, downloadFolderPath, doDownloadSubtitles);
  }); */
}
