import { JSDOM } from 'jsdom';
import { apiService } from '../../shared';

export async function loadCoursesDocument(url: string): Promise<Document> {
  const { data: html } = await apiService.get<string>(url);

  const {
    window: { document },
  } = new JSDOM(html);

  return document;
}
