export function countWeekday(start: string, end: string, weekday: number): number {
  if (!Number.isInteger(weekday) || weekday < 0 || weekday > 6)
    throw new RangeError('Weekday must be 0 through 6');
  const parse = (s: string) => {
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
    if (!m) throw new RangeError('Expected YYYY-MM-DD');
    const d = new Date(0),
      y = Number(m[1]),
      mo = Number(m[2]),
      day = Number(m[3]);
    d.setUTCFullYear(y, mo - 1, day);
    d.setUTCHours(0, 0, 0, 0);
    if (y < 1 || d.getUTCFullYear() !== y || d.getUTCMonth() !== mo - 1 || d.getUTCDate() !== day)
      throw new RangeError('Invalid date');
    return d;
  };
  const a = parse(start),
    b = parse(end),
    count = (b.getTime() - a.getTime()) / 86400000 + 1;
  if (count < 1 || count > 100000) throw new RangeError('Invalid or oversized date range');
  let total = 0;
  for (let i = 0; i < count; i++) {
    const d = new Date(a);
    d.setUTCDate(a.getUTCDate() + i);
    if (d.getUTCDay() === weekday) total++;
  }
  return total;
}
