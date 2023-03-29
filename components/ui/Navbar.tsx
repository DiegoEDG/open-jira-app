import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useContext } from 'react';
import { UIContext } from '../../context/ui';
import Link from 'next/link';
import { NoEncryption } from '@mui/icons-material';

const Navbar = () => {
	const { OpenSidebar } = useContext(UIContext);
	return (
		<AppBar position="sticky" elevation={1}>
			<Toolbar>
				<IconButton size="large" edge="start" onClick={OpenSidebar}>
					<MenuOutlinedIcon />
				</IconButton>
				<Link href="/" style={{ textDecoration: 'none', color: 'white' }}>
					<Typography variant="h5">OpenJira</Typography>
				</Link>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
