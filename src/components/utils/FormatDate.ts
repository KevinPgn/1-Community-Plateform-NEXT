import { formatDistanceToNow } from 'date-fns';

export function formatPostDate(date: Date | string): string {
  const postDate = typeof date === 'string' ? new Date(date) : date;
  return `${formatDistanceToNow(postDate, { addSuffix: true })}`;
}
