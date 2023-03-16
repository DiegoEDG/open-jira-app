import { FC } from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardHeader, Typography } from '@mui/material';
import { Task } from '../../interfaces';

interface Props {
	task: Task;
}

const TaskCard: FC<Props> = ({ task }) => {
	return (
		<Card sx={{ marginBottom: '8px' }}>
			<CardActionArea>
				<CardContent>
					<Typography sx={{ whiteSpace: 'pre-line' }}>{task.description}</Typography>
				</CardContent>
				<CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
					<Typography variant="body2">20 min ago</Typography>
				</CardActions>
			</CardActionArea>
		</Card>
	);
};

export default TaskCard;
