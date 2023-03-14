import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Navbar = () => {
	return (
		<AppBar position="sticky" elevation={1}>
			<Toolbar>
				<IconButton size="large" edge="start">
					<MenuOutlinedIcon />
				</IconButton>
				<Typography variant="h5">OpenJira</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
