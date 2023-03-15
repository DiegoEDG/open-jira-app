import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';

const TaskCard = () => {
	return (
		<Card sx={{ marginBottom: '8px' }}>
			<CardActionArea>
				<CardContent>
					<Typography sx={{ whiteSpace: 'pre-line' }}>'Eiusmod aliquip adipisicing anim laborum laboris.'</Typography>
				</CardContent>
				<CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
					<Typography variant="body2">20 min ago</Typography>
				</CardActions>
			</CardActionArea>
		</Card>
	);
};

export default TaskCard;
