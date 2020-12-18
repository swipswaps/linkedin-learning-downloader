import { DownloadableVideo, messageService } from '../shared';

export async function selectVideoSize(videos: DownloadableVideo[]): Promise<number> {
  const widths = videos.reduce((a, b) => [...a, b.progressiveStreams.map(({ width }) => width)], [] as number[][]);

  const availableWidths = videos[0].progressiveStreams.map(({ width }) => width).filter((i) => widths.every((j) => j.includes(i)));

  let selectedWidth = 0;

  do {
    const selected = Number.parseInt(
      await messageService.promptUserInput({
        text: `\nPlease, select desired video width: ${availableWidths.join(', ')}: `,
        type: 'prompt',
      })
    );

    if (Number.isInteger(selected) && availableWidths.includes(selected)) {
      selectedWidth = selected;
    }
  } while (!selectedWidth);

  return selectedWidth;
}
