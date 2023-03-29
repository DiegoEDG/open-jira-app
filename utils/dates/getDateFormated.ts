import { formatDistanceToNow } from 'date-fns';

const DateFormated = (date: number) => {
	return formatDistanceToNow(date);
};
export default DateFormated;
