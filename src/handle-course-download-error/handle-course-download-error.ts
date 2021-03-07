import { AxiosError } from 'axios';

import { messageService } from '../shared';
import { Message } from '../shared/message-service/message.model';

export function handleCourseDownloadError(error: AxiosError) {
  let errorMessage: Message;

  if (error.response?.status === 403) {
    errorMessage = {
      text: `\nLooks like your are not authorized to view the course or entered wrong cookie. Refer to the README to check how to obtain cookie/csrf token. \nFailed with error: ${error.toString()}`,
      type: 'error',
    };
  } else {
    errorMessage = {
      text: `\nLooks like something has gone wrong.\nFailed with error: ${error.toString()}`,
      type: 'error',
    };
  }

  messageService.out(errorMessage);
}
