import { promises } from 'fs';

import * as subtitlesModule from '../../get-subtitles';
import * as sharedSubtitlesModule from '../shared';
import * as generateFileNameModule from '../../shared/generate-filename';
import { messageService, VideosList } from '../../shared';
import { downloadSubtitles } from './download-subtitles.function';

describe('downloadSubtitles test', () => {
  jest.spyOn(global.console, 'log').mockImplementation(jest.fn());
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('ask user to download subtitles, negative scenario', async () => {
    // Arrange
    const videosList: VideosList = getMockVideosList();
    const courseUrl = 'http://some-url.com/course';
    const downloadFolderPath = './';
    const promptUserInputSpy = jest
      .spyOn(messageService, 'promptUserInput')
      .mockResolvedValueOnce('moo')
      .mockResolvedValueOnce('foo')
      .mockResolvedValueOnce('dunno')
      .mockResolvedValueOnce('n');
    const getSubtitlesSpy = jest.spyOn(subtitlesModule, 'getSubtitles');

    // Act
    await downloadSubtitles(videosList, courseUrl, downloadFolderPath);

    // Assert
    expect(getSubtitlesSpy).not.toHaveBeenCalled();
    expect(promptUserInputSpy).toHaveBeenCalledTimes(4);
  });
  it('ask user to download subtitles, positive scenario', async () => {
    // Arrange
    const videosList: VideosList = getMockVideosList();
    const courseUrl = 'http://some-url.com/course';
    const downloadFolderPath = './';
    const promptUserInputSpy = jest.spyOn(messageService, 'promptUserInput').mockResolvedValueOnce('moo').mockResolvedValueOnce('Y');
    const generatedSubtitles = '00:00:00,000\nBla bla bla';
    const getSubtitlesSpy = jest.spyOn(subtitlesModule, 'getSubtitles').mockResolvedValueOnce(generatedSubtitles);
    const generatedFileName = 'generated-file-name';
    const generateFileNameSpy = jest.spyOn(generateFileNameModule, 'generateFileName').mockReturnValueOnce(generatedFileName);
    const generatedFilePath = './new-subtitles-file.srt';
    const getFilePathSpy = jest.spyOn(sharedSubtitlesModule, 'getFilePath').mockReturnValue(generatedFilePath);
    const promisesSpy = jest.spyOn(promises, 'writeFile').mockResolvedValue(undefined);

    // Act
    await downloadSubtitles(videosList, courseUrl, downloadFolderPath);

    // Assert
    expect(generateFileNameSpy).toHaveBeenCalledTimes(1);
    expect(generateFileNameSpy).toHaveBeenCalledWith(0, videosList.videos[0].title);

    expect(getSubtitlesSpy).toHaveBeenCalledTimes(1);
    expect(getSubtitlesSpy).toHaveBeenCalledWith(`${courseUrl}/${videosList.videos[0].slug}`);

    expect(getFilePathSpy).toHaveBeenCalledTimes(1);
    expect(getFilePathSpy).toHaveBeenCalledWith(downloadFolderPath, `${generatedFileName}.srt`);

    expect(promisesSpy).toHaveBeenCalledTimes(1);
    expect(promisesSpy).toHaveBeenCalledWith(generatedFilePath, generatedSubtitles);

    expect(promptUserInputSpy).toHaveBeenCalledTimes(2);
  });
});

function getMockVideosList(): VideosList {
  return {
    listName: 'vide list name',
    parentSlug: 'some-parent-slug',
    videos: [
      {
        slug: 'some-video',
        title: 'some-title',
      },
    ],
  };
}
