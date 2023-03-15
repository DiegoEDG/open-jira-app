import { List, Paper } from '@mui/material';
import TaskCard from './TaskCard';

const TaskList = () => {
	return (
		<div>
			<Paper sx={{ height: '100vh', overflow: 'scroll', margin: '0px', backgroundColor: 'transparent' }} elevation={0}>
				<List sx={{ opacity: '1' }}>
					<TaskCard />
					<TaskCard />
					<TaskCard />
				</List>
			</Paper>
		</div>
	);
};

export default TaskList;
