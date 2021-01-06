export function generateFileName(index: number, title: string): string {
  return `${++index} ${removeForbiddenCharsFromString(title)}`;
}

function removeForbiddenCharsFromString(str: string): string {
  return str.replace(/[/:*?"<>|~#%&+{}\-\\]/g, '');
}
