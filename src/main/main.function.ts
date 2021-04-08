import { AxiosError } from 'axios';

import { askIfUserHadEnough } from '../ask-if-user-had-enough';
import { downloadCourse } from '../download-course';
import { downloadCourseFromConfig } from '../download-course-from-config';
import { getDownloadConfig } from '../downloads-config';
import { handleCourseDownloadError } from '../handle-course-download-error';
import { messageService } from '../shared';

export async function main(): Promise<void> {
  messageService.out({
    text: '\nWelcome to the Linkedin learning videos downloade v1!',
    type: 'info',
  });

  let isOver = false;

  const downloadConfig = await getDownloadConfig(__dirname);

  if (downloadConfig) {
    messageService.out({
      text: 'Found configuration file, trying to load videos from it',
      type: 'info',
    });
    try {
      await downloadCourseFromConfig(downloadConfig);
    } catch (e) {
      handleCourseDownloadError(e as AxiosError);
    } finally {
      isOver = await askIfUserHadEnough();
    }
  }

  while (!isOver) {
    try {
      await downloadCourse(__dirname);
    } catch (e) {
      handleCourseDownloadError(e as AxiosError);
    } finally {
      isOver = await askIfUserHadEnough();
    }
  }

  messageService.out({
    text: 'Bye bye!\n\n',
    type: 'info',
  });

  process.exit();
}
