import { WELCOME_MESSAGE } from './constants';
import { promptCourseUrl } from './prompt-course-url';
import { messageService } from './shared';

export async function main(): Promise<void> {
  messageService.out({
    text: WELCOME_MESSAGE,
    type: 'info',
  });

  const courseUrl = await promptCourseUrl();

  messageService.out({
    text: `\nmain function ran, got ${courseUrl}\n`,
    type: 'success',
  });
}
