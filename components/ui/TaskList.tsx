import { FC, useContext, useMemo } from 'react';
import { List, Paper } from '@mui/material';
import { TaskStatus } from '../../interfaces';
import TaskCard from './TaskCard';
import { TaskContext } from '../../context/tasks';

interface Props {
	status: TaskStatus;
}

const TaskList: FC<Props> = ({ status }) => {
	const { tasks } = useContext(TaskContext);

	const tasksByStatus = useMemo(() => tasks.filter((task) => task.status === status), [tasks]);

	return (
		<div>
			<Paper sx={{ height: '100vh', overflow: 'scroll', margin: '0px', backgroundColor: 'transparent' }} elevation={0}>
				<List sx={{ opacity: '1' }}>
					{tasksByStatus.map((task) => (
						<TaskCard key={task._id} task={task} />
					))}
				</List>
			</Paper>
		</div>
	);
};

export default TaskList;
