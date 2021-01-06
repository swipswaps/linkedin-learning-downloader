import { JSDOM } from 'jsdom';
import { apiService } from '../../api-service';

export async function loadUrlAsDocument(url: string): Promise<Document> {
  const { data: html } = await apiService.get<string>(url);

  const {
    window: { document },
  } = new JSDOM(html);

  return document;
}
