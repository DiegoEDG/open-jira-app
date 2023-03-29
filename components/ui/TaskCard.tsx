import { DragEvent, FC } from 'react';
import { useRouter } from 'next/router';
import { Card, CardActionArea, CardActions, CardContent, CardHeader, Typography } from '@mui/material';
import { Task } from '../../interfaces';
import { getDateFormated } from '../../utils/dates';

interface Props {
	task: Task;
}

const TaskCard: FC<Props> = ({ task }) => {
	const router = useRouter();

	const onDragStart = (event: DragEvent) => {
		event.dataTransfer.setData('id', task._id);
	};
	const onDragEnd = (event: DragEvent) => {
		// console.log(event);
	};

	const handleRedirect = () => {
		router.push(`/tasks/${task._id}`);
	};

	return (
		<Card
			sx={{ marginBottom: '8px' }}
			draggable
			onDragStart={onDragStart}
			onDragEnd={onDragEnd}
			onClick={handleRedirect}
		>
			<CardActionArea>
				<CardContent>
					<Typography sx={{ whiteSpace: 'pre-line' }}>{task.description}</Typography>
				</CardContent>
				<CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
					<Typography variant="caption" marginBottom={2}>
						{`Created ${getDateFormated(task.createdAt)} ago`}
					</Typography>
				</CardActions>
			</CardActionArea>
		</Card>
	);
};

export default TaskCard;
