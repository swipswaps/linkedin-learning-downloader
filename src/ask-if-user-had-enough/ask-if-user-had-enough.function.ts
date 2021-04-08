import { messageService } from '../shared';

export async function askIfUserHadEnough(): Promise<boolean> {
  const userChoiceToContinue = await messageService.promtUserUntilValidInput(
    {
      text: '\nDownload another course? (y/n) ',
      type: 'prompt',
    },
    (input: string) => /^[yn]$/i.test(input)
  );
  return /^n$/i.test(userChoiceToContinue);
}
