import { ChangeEvent, FC, useState, useContext } from 'react';
import { GetServerSideProps } from 'next';
import { useSnackbar } from 'notistack';
import {
	Button,
	capitalize,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	FormControl,
	FormControlLabel,
	FormLabel,
	Grid,
	IconButton,
	Radio,
	RadioGroup,
	TextField
} from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { MainLayout } from '../../../components/layouts';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { TaskStatus } from '../../../interfaces';
import { isValidObjectId } from 'mongoose';
import { getTaskData } from '../../../database';
import { Task } from '../../../interfaces/task';
import { TaskContext } from '../../../context/tasks/TaskContext';
import { useRouter } from 'next/router';

interface Props {
	task: Task;
}

const validStatus: TaskStatus[] = ['to-do', 'in-progress', 'done'];

const taskForm: FC<Props> = ({ task }) => {
	const { UpdateTask } = useContext(TaskContext);
	const { enqueueSnackbar } = useSnackbar();
	const router = useRouter();

	const [inputValue, setInputValue] = useState(task.description);
	const [status, setStatus] = useState(task.status);
	const [inputTouched, setInputTouched] = useState(false);

	const handleInputValue = (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setInputValue(ev.target.value);
	};
	const handleStatus = (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setStatus(ev.target.value as TaskStatus);
	};

	const onSave = () => {
		const taskUpdated = {
			...task,
			description: inputValue,
			status
		};
		UpdateTask(taskUpdated);
		enqueueSnackbar('Task Updated', { variant: 'success', anchorOrigin: { horizontal: 'right', vertical: 'top' } });
		router.push('/');
	};

	return (
		<MainLayout title="Editing task">
			<Grid container justifyContent="center" sx={{ marginTop: 2 }}>
				<Grid item xs={12} sm={8} md={6}>
					<Card>
						<CardHeader title={`Task info:`} />

						<CardContent>
							<TextField
								sx={{ marginBottom: 2 }}
								fullWidth
								placeholder="Description"
								autoFocus
								multiline
								label="Description"
								error={inputValue.length <= 0 && inputTouched}
								value={inputValue}
								onChange={handleInputValue}
								onBlur={() => setInputTouched(true)}
							/>

							<FormControl>
								<FormLabel>Status:</FormLabel>
								<RadioGroup row value={status} onChange={handleStatus}>
									{validStatus.map((option) => (
										<FormControlLabel key={option} value={option} control={<Radio />} label={capitalize(option)} />
									))}
								</RadioGroup>
							</FormControl>
						</CardContent>

						<CardActions>
							<Button
								startIcon={<SaveOutlinedIcon />}
								variant="contained"
								fullWidth
								disabled={inputValue.length <= 0}
								onClick={onSave}
							>
								Save
							</Button>

							<IconButton
								sx={{
									position: 'fixed',
									bottom: 30,
									right: 30,
									backgroundColor: 'error.dark'
								}}
							>
								<DeleteOutlinedIcon />
							</IconButton>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
		</MainLayout>
	);
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const { id } = params as { id: string };

	const task = await getTaskData(id);

	if (!isValidObjectId(id)) {
		return {
			redirect: {
				destination: '/',
				permanent: false
			}
		};
	}

	return {
		props: {
			task
		}
	};
};

export default taskForm;
