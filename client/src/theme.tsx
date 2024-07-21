import { createTheme } from '@mui/material/styles';
import { ukUA } from "@mui/material/locale";

// A custom theme for this app
const theme = createTheme(
	{
		palette: {
			mode: 'dark',
			primary: {
				main: 'rgb(251, 150, 120)',
			},
			secondary: {
				main: 'rgb(3, 201, 215)',
			},
			background: {
				default: 'rgb(32, 35, 42)',
				paper: 'rgb(40, 44, 52)',
			},
			text: {
				primary: 'rgb(230, 229, 232)',
				secondary: 'rgb(173, 176, 187)',
			},
			success: {
				main: 'rgb(0, 194, 146)',
			},
			error: {
				main: 'rgb(228, 106, 118)',
			},
			warning: {
				main: 'rgb(254, 201, 15)',
			},
			info: {
				main: 'rgb(3, 201, 215)',
			},
			divider: 'rgba(255, 255, 255, 0.12)',
		},
		typography: {
			fontFamily: '"Montserrat", "Arial", sans-serif',
			fontWeightLight: 300,
			fontWeightRegular: 500,
			fontWeightMedium: 500,
			fontWeightBold: 600,
		},
		spacing: 8,
		shape: {
			borderRadius: 8,
		},
		components: {
			MuiPaper: {
				styleOverrides: {
					root: {
						backgroundImage:
							'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
					},
				},
			},
			MuiAppBar: {
				styleOverrides: {
					root: {
						backgroundColor: 'rgb(32, 35, 42)',
						backgroundImage: 'none',
						color: '#fff',
					},
				},
			},
			MuiButton: {
				styleOverrides: {
					root: {
						textTransform: 'none',
						fontWeight: 'bold',
					},
				},
			},
		},
	},
	ukUA
);

export default theme;
