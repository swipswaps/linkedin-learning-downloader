import { ENTER_COURSE_URL_PROMPT } from './constants/enter-course-url-prompt';
import { INVALID_COURSE_URL_MESSAGE } from './constants/invalid-course-url-message';
import { promptUserInput } from '../shared';
import { validateCourseUrl } from './validate-course-url.function';

export async function promptCourseUrl(): Promise<string> {
  let courseUrl: string;

  while (true) {
    courseUrl = await promptUserInput(ENTER_COURSE_URL_PROMPT);
    const isValidUrl = validateCourseUrl(courseUrl);
    if (isValidUrl) {
      break;
    }
    console.log(INVALID_COURSE_URL_MESSAGE);
  }

  return courseUrl;
}
