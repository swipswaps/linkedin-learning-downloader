import { Line } from '../inline-subtitles.model';
import { convertDataToSrt } from './convert-data-to-srt.function';

describe('convertDataToSrt tests', () => {
  it('Should convert lines to proper .srt string', () => {
    // Arrange
    const lines = getMockLines();

    // Act
    const srt = convertDataToSrt(lines);

    // Assert
    expect(srt).toMatchSnapshot();
  });
});

function getMockLines(): Line[] {
  return [
    {
      $type: '',
      caption: 'Bla bla bla first subtitle.',
      transcriptStartAt: 1000,
    },
    {
      $type: '',
      caption: 'Bla bla bla next subtitle',
      transcriptStartAt: 3006,
    },
  ];
}
