import { ENTER_COURSE_URL_PROMPT } from './constants/enter-course-url-prompt';
import { INVALID_COURSE_URL_MESSAGE } from './constants/invalid-course-url-message';
import { messageService } from '../shared';
import { validateCourseUrl } from './validate-course-url.function';

export async function promptCourseUrl(): Promise<string> {
  let courseUrl: string;

  while (true) {
    courseUrl = await messageService.promptUserInput({
      text: ENTER_COURSE_URL_PROMPT,
      type: 'prompt',
    });

    const isValidUrl = validateCourseUrl(courseUrl);
    if (isValidUrl) {
      break;
    }

    messageService.out({
      text: INVALID_COURSE_URL_MESSAGE,
      type: 'error',
    });
  }

  return courseUrl;
}
