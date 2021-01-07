import { JSDOM } from 'jsdom';
import * as downloadFileModule from '../../shared/download-file';

import { downloadExercises } from './download-exercises';

describe('downloadExercises', () => {
  jest.spyOn(global.console, 'log').mockImplementation(jest.fn());

  it('should find and download all files', async () => {
    // Arrange
    const {
      window: { document },
    } = new JSDOM(getMockHtml());
    const saveFileSpy = jest.spyOn(downloadFileModule, 'downloadFile').mockResolvedValue(undefined);
    const dir = '.';

    // Act
    await downloadExercises(document, dir);

    // Assert
    expect(saveFileSpy).toHaveBeenCalledTimes(2);
    expect(saveFileSpy.mock.calls).toEqual([
      ['link_one', './1 File_One.zip', '1 File_One.zip'],
      ['link_two', './2 File_Two.zip', '2 File_Two.zip'],
    ]);
  });
});

function getMockHtml(): string {
  return `<!DOCTYPE html>
    <html>
    <body>
    
    <code style="display: none">
    {
      "included": [
        {
          "exerciseFiles": [
            {
              "sizeInBytes": 398459,
              "name": "File_One.zip",
              "$recipeTypes": ["com.linkedin.learning.api.deco.content.DecoratedExerciseFile"],
              "url": "link_one",
              "$type": "com.linkedin.learning.api.deco.content.ExerciseFile"
            },
            {
              "sizeInBytes": 398459,
              "name": "File_Two.zip",
              "$recipeTypes": ["com.linkedin.learning.api.deco.content.DecoratedExerciseFile"],
              "url": "link_two",
              "$type": "com.linkedin.learning.api.deco.content.ExerciseFile"
            }
          ]
        }
      ]
    }    
    </code>
    
    </body>
    </html>`;
}
