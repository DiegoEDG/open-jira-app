import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		background: {
			default: '#1A374D'
		},
		secondary: {
			main: '#F67280'
		},
		error: {
			main: red.A400
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
