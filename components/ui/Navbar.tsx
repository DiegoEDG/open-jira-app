import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useContext } from 'react';
import { UIContext } from '../../context/ui';

const Navbar = () => {
	const { OpenSidebar } = useContext(UIContext);
	return (
		<AppBar position="sticky" elevation={1}>
			<Toolbar>
				<IconButton size="large" edge="start" onClick={OpenSidebar}>
					<MenuOutlinedIcon />
				</IconButton>
				<Typography variant="h5">OpenJira</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
