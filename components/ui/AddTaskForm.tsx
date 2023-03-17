import React, { ChangeEvent, useState, useContext } from 'react';
import { Box, Button, TextField } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { TaskContext } from '../../context/tasks';

const AddTaskForm = () => {
	const { AddNewTask } = useContext(TaskContext);
	const [isAdding, setIsAdding] = useState(false); //TODO: move to context?
	const [inputTouched, setInputTouched] = useState(false);
	const [inputValue, setInputValue] = useState('');

	const handleInputValue = (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setInputValue(ev.target.value);
	};

	const onSave = () => {
		if (inputValue.length === 0) return;
		AddNewTask(inputValue);
		setInputValue('');
		setInputTouched(false);
		setIsAdding(false);
	};

	return (
		<Box marginX={2}>
			{isAdding ? (
				<>
					<TextField
						fullWidth
						placeholder="New Task"
						autoFocus
						multiline
						label="New Task"
						sx={{ marginBottom: '15px' }}
						color="primary"
						error={inputValue.length <= 0 && inputTouched}
						value={inputValue}
						onChange={handleInputValue}
						onBlur={() => setInputTouched(true)}
					/>
					<Box display="flex" justifyContent="space-between">
						<Button variant="outlined" endIcon={<SaveOutlinedIcon />} color="success" onClick={onSave}>
							Save
						</Button>
						<Button variant="text" color="error" onClick={() => setIsAdding(false)}>
							Cancel
						</Button>
					</Box>
				</>
			) : (
				<Button
					variant="outlined"
					endIcon={<AddCircleOutlineOutlinedIcon />}
					color="primary"
					fullWidth
					onClick={() => setIsAdding(true)}
				>
					New Task
				</Button>
			)}
		</Box>
	);
};

export default AddTaskForm;
