import { promises, existsSync } from 'fs';

import { AuthHeaders, messageService } from '../../shared';

export class AuthService {
  private authHeaders?: AuthHeaders;

  public async getAuthHeaders(): Promise<AuthHeaders> {
    if (!this.authHeaders) {
      this.authHeaders = (await this.loadTokensFromFile()) || (await this.promptUserForTokens());
    }

    return this.authHeaders;
  }

  private async loadTokensFromFile(): Promise<AuthHeaders | void> {
    const cookieFilePath = `${__dirname}/cookie.token`;
    const csrfFilePath = `${__dirname}/csrf.token`;
    if (!existsSync(cookieFilePath) || !existsSync(csrfFilePath)) {
      return;
    }
    try {
      const cookie = await promises.readFile(cookieFilePath);
      const csrf = await promises.readFile(csrfFilePath);
      const tokens: AuthHeaders = {
        'csrf-token': csrf.toString(),
        cookie: cookie.toString(),
      };
      if (!tokens.cookie || !tokens['csrf-token']) {
        throw 'Invalid tokens!';
      }
      return tokens as AuthHeaders;
    } catch (e) {
      messageService.out({
        text: e.toString(),
        type: 'error',
      });
    }
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
