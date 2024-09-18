import { format } from 'date-fns/fp';

export function toDateTime(secs: number) {
  var t = new Date('1970-01-01T00:30:00Z'); // Unix epoch start.
  t.setSeconds(secs);
  return t;
}

export const formatDate = (date: string | number | Date) => format('MM/dd/yyyy hh:mm', date);
