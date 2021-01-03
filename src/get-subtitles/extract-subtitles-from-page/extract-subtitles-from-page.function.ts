import { JSDOM } from 'jsdom';

import { Included, Line, InlineSubtitles } from '../inline-subtitles.model';

export function extractSubtitlesFromPage(html: string): Line[] {
  const {
    window: { document },
  } = new JSDOM(html);
  const codeBlockWithSubtitles: Element = Array.from(document.querySelectorAll('code[style="display: none"]')).find((i) =>
    i.textContent?.includes('transcriptStartAt')
  ) as Element;
  const subtitlesBlock: InlineSubtitles = JSON.parse(codeBlockWithSubtitles.textContent!.replace(/&quot/g, '"')) as InlineSubtitles;

  const { lines: subtitlesArray } = subtitlesBlock.included.find(({ lines }) => Boolean(lines)) as Included;

  return subtitlesArray || [];
}
