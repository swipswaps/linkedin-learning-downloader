import fs from 'fs';
import { getDownloadConfig } from './get-download-config.function';

it('Should return null if file does not exist', async () => {
  // Arrange
  const rootDir = './';
  jest.spyOn(fs, 'existsSync').mockReturnValue(false);

  // Act
  const result = await getDownloadConfig(rootDir);

  // Assert
  expect(result).toBeNull();
});

it('Should return parsed config if it reads the file', async () => {
  // Arrange
  const rootDir = './';
  jest.spyOn(fs, 'existsSync').mockReturnValue(true);
  jest.spyOn(fs.promises, 'readFile').mockResolvedValueOnce('{"courses": []}');

  // Act
  const result = await getDownloadConfig(rootDir);

  // Assert
  expect(result).toBeTruthy();
});
