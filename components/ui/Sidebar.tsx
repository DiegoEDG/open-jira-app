import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import { useContext } from 'react';
import { UIContext } from '../../context/ui';

const Sidebar = () => {
	const menuItems = ['Inbox', 'Starred', 'Pending'];
	const { isSidebarOpen, CloseSidebar } = useContext(UIContext);
	return (
		<Drawer anchor="left" open={isSidebarOpen} onClose={CloseSidebar}>
			<Box sx={{ width: '300px' }}>
				<Box sx={{ padding: '10px' }}>
					<Typography variant="h5" sx={{ display: 'flex', justifyContent: 'center' }}>
						Menu
					</Typography>
					<List>
						{menuItems.map((item, idx) => (
							<ListItem button key={item}>
								<ListItemIcon>{idx % 2 ? <InboxOutlinedIcon /> : <MailOutlinedIcon />}</ListItemIcon>
								<ListItemText>{item}</ListItemText>
							</ListItem>
						))}
					</List>
					<Divider />
					<List>
						{menuItems.map((item, idx) => (
							<ListItem button key={item}>
								<ListItemIcon>{idx % 2 ? <InboxOutlinedIcon /> : <MailOutlinedIcon />}</ListItemIcon>
								<ListItemText>{item}</ListItemText>
							</ListItem>
						))}
					</List>
				</Box>
			</Box>
		</Drawer>
	);
};

export default Sidebar;
