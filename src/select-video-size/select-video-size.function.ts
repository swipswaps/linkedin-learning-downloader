import { DownloadableVideo, messageService } from '../shared';

export async function selectVideoSize(videos: DownloadableVideo[]): Promise<number> {
  const widths = videos.reduce((a, b) => [...a, b.progressiveStreams.map(({ width }) => width)], [] as number[][]);

  const availableWidths = videos[0].progressiveStreams.map(({ width }) => width).filter((i) => widths.every((j) => j.includes(i)));

  return Number.parseInt(
    await messageService.promtUserUntilValidInput(
      {
        text: `\nPlease, select desired video width: ${availableWidths.join(', ')}: `,
        type: 'prompt',
      },
      (input: string) => availableWidths.map(String).includes(input)
    )
  );
}
