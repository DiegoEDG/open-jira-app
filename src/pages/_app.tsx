import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from '../../themes';
import '@/styles/globals.css';
import { UIProvider } from '../../context/ui';
import { TaskProvider } from '../../context/tasks';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<TaskProvider>
			<UIProvider>
				<ThemeProvider theme={darkTheme}>
					<CssBaseline />
					<Component {...pageProps} />
				</ThemeProvider>
			</UIProvider>
		</TaskProvider>
	);
}
