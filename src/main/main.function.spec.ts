import * as downloadCourseModule from '../download-course';
import { messageService } from '../shared';
import { main } from './main.function';

describe('downloadSubtitles test', () => {
  jest.spyOn(global.console, 'log').mockImplementation(jest.fn());
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('ask user to download subtitles, negative scenario', async () => {
    // Arrange
    const promptUserInputSpy = jest.spyOn(messageService, 'promptUserInput').mockResolvedValueOnce('dunno').mockResolvedValueOnce('n');
    const downloadCourseSpy = jest.spyOn(downloadCourseModule, 'downloadCourse').mockResolvedValueOnce(undefined);
    const exitSpy = jest.spyOn(process, 'exit').mockImplementation();

    // Act
    await main();

    // Assert
    expect(downloadCourseSpy).toHaveBeenCalledTimes(1);
    expect(promptUserInputSpy).toHaveBeenCalledTimes(2);
    expect(exitSpy).toHaveBeenCalledTimes(1);
  });

  
  it('ask user to download subtitles, positive scenario', async () => {
    // Arrange
    const promptUserInputSpy = jest.spyOn(messageService, 'promptUserInput')
    .mockResolvedValueOnce('Y')
    .mockResolvedValueOnce('y')
    .mockResolvedValueOnce('dunno')
    .mockResolvedValueOnce('y')
    .mockResolvedValueOnce('Y')
    .mockResolvedValueOnce('y')
    .mockResolvedValueOnce('n');
    const downloadCourseSpy = jest.spyOn(downloadCourseModule, 'downloadCourse').mockResolvedValue(undefined);
    const exitSpy = jest.spyOn(process, 'exit').mockImplementation();

    // Act
    await main();

    // Assert
    expect(downloadCourseSpy).toHaveBeenCalledTimes(6);
    expect(promptUserInputSpy).toHaveBeenCalledTimes(7);
    expect(exitSpy).toHaveBeenCalledTimes(1);
  });
});
