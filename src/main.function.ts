import { WELCOME_MESSAGE } from './constants';
import { downloadCourse } from './download-course';
import { messageService } from './shared';

export async function main(): Promise<void> {
  messageService.out({
    text: WELCOME_MESSAGE,
    type: 'info',
  });

  let isOver = false;

  do {
    await downloadCourse(__dirname);

    let userChoiceToContinue: string;
    do {
      userChoiceToContinue = await messageService.promptUserInput({
        text: 'Download another course? (y/n) ',
        type: 'prompt',
      });
    } while (!/^[yn]$/i.test(userChoiceToContinue));

    isOver = /^n$/i.test(userChoiceToContinue);
  } while (!isOver);

  messageService.out({
    text: 'Bye bye!',
    type: 'info',
  });

  process.exit();
}
