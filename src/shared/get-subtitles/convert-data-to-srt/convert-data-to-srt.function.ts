import { Line } from '../inline-subtitles.model';

export function convertDataToSrt(lines: Line[]): string {
  return lines.reduce((a, b, i) => {
    let subtitleSpan = msToSrtTime(b.transcriptStartAt);
    const isTheLastItemInArray = i === lines.length - 1;
    if (isTheLastItemInArray) {
      subtitleSpan += '\n';
    } else {
      const subtitleEndTime = msToSrtTime(lines[i + 1].transcriptStartAt);
      subtitleSpan += ` --> ${subtitleEndTime}\n`;
    }
    const subtitle = `${++i}\n${subtitleSpan}${b.caption}\n\n`;
    return a + subtitle;
  }, '');
}

function msToSrtTime(ms: number): string {
  const millisecond = (ms % 1000).toLocaleString('en-US', { minimumIntegerDigits: 3, useGrouping: false });
  const second = Math.trunc(ms / 1000).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
  const minute = Math.trunc(ms / 1000 / 60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
  const hour = Math.trunc(ms / 1000 / 60 / 60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });

  return `${hour}:${minute}:${second},${millisecond}`;
}
