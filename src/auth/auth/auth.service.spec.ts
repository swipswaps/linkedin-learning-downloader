import { AuthHeaders, messageService } from '../../shared';
import { authService } from './auth.service';

describe('AuthService test', () => {
  it('getAuthHeaders', async () => {
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

    // Act
    const result = await authService.getAuthHeaders();

    // Assert
    expect(result).toEqual(headers);
    expect(promptUserInputSpy).toHaveBeenCalledTimes(4);
  });
});
