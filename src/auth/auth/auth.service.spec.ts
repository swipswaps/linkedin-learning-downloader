import fs from 'fs';

import { AuthHeaders, messageService } from '../../shared';
import { AuthService } from './auth.service';

describe('AuthService test', () => {
  jest.spyOn(global.console, 'log').mockImplementation(jest.fn());

  let authService: AuthService;

  beforeEach(() => {
    authService = new AuthService();
  });

  it('getAuthHeaders: get them from user', async () => {
    // Arrange
    const csrfToken = 'UGK~d8a:uWAQo0T';
    const cookie = '7AE9D551B286A66B71F1D87A898F2';
    const headers: AuthHeaders = {
      'csrf-token': csrfToken,
      cookie,
    };
    const promptUserInputSpy = jest
      .spyOn(messageService, 'promptUserInput')
      .mockResolvedValueOnce('')
      .mockResolvedValueOnce(csrfToken)
      .mockResolvedValueOnce('')
      .mockResolvedValueOnce(cookie);
    jest.spyOn(fs, 'existsSync').mockReturnValueOnce(false);

    // Act
    const result = await authService.getAuthHeaders();

    // Assert
    expect(result).toEqual(headers);
    expect(promptUserInputSpy).toHaveBeenCalledTimes(4);
  });

  it('getAuthHeaders: get them from tokens file', async () => {
    // Arrange
    const csrfToken = 'example-csrf-token';
    const cookie = '-example-cookie';
    const headers: AuthHeaders = {
      'csrf-token': csrfToken,
      cookie,
    };
    jest.spyOn(fs, 'existsSync').mockReturnValueOnce(true);
    jest.spyOn(fs.promises, 'readFile').mockResolvedValueOnce(`
    {
      "csrf-token": "${csrfToken}",
      "cookie": "${cookie}"
    }
    `);

    // Act
    const result = await authService.getAuthHeaders();

    // Assert
    expect(result).toEqual(headers);
  });
});
