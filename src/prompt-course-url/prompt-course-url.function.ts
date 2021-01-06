import { messageService } from '../shared';
import { validateCourseUrl } from './validate-course-url.function';

export async function promptCourseUrl(): Promise<string> {
  return messageService.promtUserUntilValidInput(
    {
      text: `\nPlease enter url to a linkedin course you would like to download?
      i.e. https://www.linkedin.com/learning/critical-thinking-for-better-judgment-and-decision-making\n`,
      type: 'prompt',
    },
    (url: string) => validateCourseUrl(url),
    {
      text: 'Invalid course url entered, enter a valid one.',
      type: 'error',
    }
  );
}
