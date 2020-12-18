import { WELCOME_MESSAGE } from './constants/welcome-message';
import { promptCourseUrl } from './prompt-course-url/';

export async function main(): Promise<void> {
  console.log(WELCOME_MESSAGE);

  const courseUrl = await promptCourseUrl();

  console.log('main function ran, got ' + courseUrl);
}
