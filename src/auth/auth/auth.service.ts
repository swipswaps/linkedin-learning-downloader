import { AuthHeaders, messageService } from '../../shared';

class AuthService {
  private authHeaders?: AuthHeaders;

  public async getAuthHeaders(): Promise<AuthHeaders> {
    if (!this.authHeaders) {
      this.authHeaders = await this.promptUserForTokens();
    }

    return this.authHeaders;
  }

  private async promptUserForTokens(): Promise<AuthHeaders> {
    const csrfToken = await messageService.promtUserUntilValidInput(
      {
        text: 'Please enter CSRF token:',
        type: 'prompt',
      },
      Boolean
    );

    const cookie = await messageService.promtUserUntilValidInput(
      {
        text: 'Please enter the cookie:',
        type: 'prompt',
      },
      Boolean
    );

    return { 'csrf-token': csrfToken, cookie };
  }
}

export const authService = new AuthService();
