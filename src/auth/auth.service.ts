import { AuthHeaders, messageService } from '../shared';

class AuthService {
  private authHeaders?: AuthHeaders;

  public async getAuthHeaders(): Promise<AuthHeaders> {
    if (!this.authHeaders) {
      this.authHeaders = await this.promptUserForTokens();
    }

    return this.authHeaders;
  }

  private async promptUserForTokens(): Promise<AuthHeaders> {
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
}

export const authService = new AuthService();
