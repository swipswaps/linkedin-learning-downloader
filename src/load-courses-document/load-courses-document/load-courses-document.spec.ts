import { AxiosResponse } from 'axios';
import { apiService } from '../../shared';
import { loadCoursesDocument } from './load-courses-document';

describe('loadCoursesDocument', () => {
  it('should return js Document from url', async () => {
    // Arrange
    const url = 'http://something.com';
    jest.spyOn(apiService, 'get').mockResolvedValueOnce({ data: mockHtml() } as AxiosResponse);

    // Act
    const doc = await loadCoursesDocument(url);

    // Assert
    expect(doc).toBeTruthy();
    expect(doc).toMatchSnapshot();
  });
});

function mockHtml(): string {
  return `<!DOCTYPE html>
    <html>
    <body>
    
    <h1>My First Heading</h1>
    
    <p>My first paragraph.</p>
    
    </body>
    </html>
    `;
}
