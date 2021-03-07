import { AxiosError } from 'axios';

import { downloadCourse } from '../download-course';
import { handleCourseDownloadError } from '../handle-course-download-error';
import { messageService } from '../shared';

export async function main(): Promise<void> {
  messageService.out({
    text: '\nWelcome to the Linkedin learning videos downloade v1!',
    type: 'info',
  });

  let isOver = false;

  do {
    try {
      await downloadCourse(__dirname);
    } catch (e) {
      handleCourseDownloadError(e as AxiosError);
    }

    const userChoiceToContinue = await messageService.promtUserUntilValidInput(
      {
        text: '\nDownload another course? (y/n) ',
        type: 'prompt',
      },
      (input: string) => /^[yn]$/i.test(input)
    );

    isOver = /^n$/i.test(userChoiceToContinue);
  } while (!isOver);

  messageService.out({
    text: 'Bye bye!\n\n',
    type: 'info',
  });

  process.exit();
}
