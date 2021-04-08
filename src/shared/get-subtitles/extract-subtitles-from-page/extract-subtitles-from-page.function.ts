import { Included, Line, InlineSubtitles } from '../inline-subtitles.model';

export function extractSubtitlesFromPage(document: Document): Line[] {
  const codeBlockWithSubtitles: Element | undefined = Array.from(document.querySelectorAll('code[style="display: none"]')).find((i) =>
    i.textContent?.includes('transcriptStartAt')
  );

  if (!codeBlockWithSubtitles) {
    throw 'Could not locate subtitles on the page, check if they are missing';
  }

  const subtitlesBlock: InlineSubtitles = JSON.parse(codeBlockWithSubtitles.textContent!.replace(/&quot/g, '"')) as InlineSubtitles;

  const { lines: subtitlesArray } = subtitlesBlock.included.find(({ lines }) => Boolean(lines)) as Included;

  return subtitlesArray || [];
}
