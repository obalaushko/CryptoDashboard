import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#5e35b1',
		},
		secondary: {
			main: '#ef6c00',
		},
		success: {
			main: '#66bb6a',
		},
		info: {
			main: '#00b0ff',
		},
		background: {
			default: '#18181b',
			paper: '#27272a',
		},
	},
	spacing: 8,
	shape: {
		borderRadius: 4,
	},
	typography: {
		button: {
			letterSpacing: '0.1em',
			fontFamily: 'Lato',
		},
	},
});

export default theme;
