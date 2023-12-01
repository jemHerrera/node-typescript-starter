export function getUnixTimestamp(date?: Date): number {
  const dateToConvert = date || new Date();

  return Math.floor(dateToConvert.getTime() / 1000);
}
