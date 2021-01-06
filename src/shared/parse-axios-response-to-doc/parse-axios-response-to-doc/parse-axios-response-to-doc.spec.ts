import { AxiosResponse } from 'axios';

import { parseAxiosResponseToDoc } from './parse-axios-response-to-doc';

describe('parseAxiosResponseToDoc', () => {
  it('should return js Document', async () => {
    // Arrange
    const mockedResponse = { data: mockHtml() } as AxiosResponse;

    // Act
    const doc = await parseAxiosResponseToDoc(mockedResponse);

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
