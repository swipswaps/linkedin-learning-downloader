export function validateCourseUrl(url: string): boolean {
  return /^https?:\/\/(www\.)?linkedin\.com\/learning\/[a-z\-_\d]+$/.test(url);
}
