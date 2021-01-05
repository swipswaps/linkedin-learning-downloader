import { ENTER_COURSE_URL_PROMPT } from './constants/enter-course-url-prompt';
import { INVALID_COURSE_URL_MESSAGE } from './constants/invalid-course-url-message';
import { messageService } from '../shared';
import { validateCourseUrl } from './validate-course-url.function';

export async function promptCourseUrl(): Promise<string> {
  return messageService.promtUserUntilValidInput(
    {
      text: ENTER_COURSE_URL_PROMPT,
      type: 'prompt',
    },
    (url: string) => validateCourseUrl(url),
    {
      text: INVALID_COURSE_URL_MESSAGE,
      type: 'error',
    }
  );
}
