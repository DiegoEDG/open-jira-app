import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from '../../themes';
import '@/styles/globals.css';
import { UIProvider } from '../../context/ui';
import { TaskProvider } from '../../context/tasks';
import { SnackbarProvider } from 'notistack';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<SnackbarProvider maxSnack={3}>
			<TaskProvider>
				<UIProvider>
					<ThemeProvider theme={darkTheme}>
						<CssBaseline />
						<Component {...pageProps} />
					</ThemeProvider>
				</UIProvider>
			</TaskProvider>
		</SnackbarProvider>
	);
}
