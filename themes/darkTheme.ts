import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		background: {
			default: '#1A374D'
		},
		primary: {
			main: '#B1D0E0'
		},
		secondary: {
			main: '#F67280'
		},
		success: {
			main: '#A3DDCB'
		},
		error: {
			main: '#F67280'
		}
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: '#406882'
				}
			}
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundColor: '#406882'
				}
			}
		}
	}
});
