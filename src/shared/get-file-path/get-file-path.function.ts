export function getFilePath(folder: string, fileName: string): string {
  return /\/$/.test(folder) ? `${folder}${fileName}` : `${folder}/${fileName}`;
}
