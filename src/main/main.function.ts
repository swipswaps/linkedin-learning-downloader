import { downloadCourse } from '../download-course';
import { messageService } from '../shared';

export async function main(): Promise<void> {
  messageService.out({
    text: '\nWelcome to the Linkedin learning videos downloade v1!',
    type: 'info',
  });

  let isOver = false;

  do {
    await downloadCourse(__dirname);

    const userChoiceToContinue = await messageService.promtUserUntilValidInput(
      {
        text: 'Download another course? (y/n) ',
        type: 'prompt',
      },
      (input: string) => /^[yn]$/i.test(input)
    );

    isOver = /^n$/i.test(userChoiceToContinue);
  } while (!isOver);

  messageService.out({
    text: 'Bye bye!',
    type: 'info',
  });

  process.exit();
}
