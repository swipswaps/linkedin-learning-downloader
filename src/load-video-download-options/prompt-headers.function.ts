import { messageService } from '../shared';
import { VideoRequestHeaders } from './models';

export async function promptHeaders(): Promise<VideoRequestHeaders> {
  let csrfToken: string;
  do {
    csrfToken = await messageService.promptUserInput({
      text: 'Please enter CSRF token:',
      type: 'prompt',
    });
  } while (!csrfToken);

  let cookie: string;
  do {
    cookie = await messageService.promptUserInput({
      text: 'Please enter the cookie:',
      type: 'prompt',
    });
  } while (!cookie);

  return { 'csrf-token': csrfToken, cookie };
}
