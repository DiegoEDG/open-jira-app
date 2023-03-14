import { FC, ReactElement } from 'react';
import Head from 'next/head';
import { Box } from '@mui/material';
import { Navbar, Sidebar } from '../ui';

interface Props {
	title?: string;
	children: ReactElement;
}

const MainLayout: FC<Props> = ({ children, title = 'OpenJira App' }) => {
	return (
		<Box sx={{ flexFlow: 1 }}>
			<Head>
				<title>{title}</title>
			</Head>
			<Sidebar />
			<Navbar />
			<Box sx={{ padding: '10px 10px' }}>{children}</Box>
		</Box>
	);
};

export default MainLayout;
