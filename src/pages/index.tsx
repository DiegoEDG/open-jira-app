import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import { MainLayout } from '../../components/layouts';
import { TaskList } from '../../components/ui';

export default function HomePage() {
	return (
		<MainLayout>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={4}>
					<Card sx={{ height: 'calc(100vh-100px)', backgroundColor: 'transparent' }}>
						<CardHeader title="To Do" />
						<CardContent>
							<TaskList />
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Card sx={{ height: 'calc(100vh-100px)', backgroundColor: 'transparent' }}>
						<CardHeader title="In Progress" />
						<CardContent>
							<TaskList />
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Card sx={{ height: 'calc(100vh-100px)', backgroundColor: 'transparent' }}>
						<CardHeader title="Done" />
						<CardContent>
							<TaskList />
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</MainLayout>
	);
}
