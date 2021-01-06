import { AxiosResponse } from 'axios';
import { JSDOM } from 'jsdom';

export async function parseAxiosResponseToDoc({ data: html }: AxiosResponse): Promise<Document> {
  const {
    window: { document },
  } = new JSDOM(html);

  return document;
}
