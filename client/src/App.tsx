import { ToastContainer } from 'react-toastify';
import { TitleContext } from './context/Context.ts';
import AppRouter from './router/AppRouter.tsx';
import { useState } from 'react';
import '@style/index.scss';
import { CssBaseline, GlobalStyles } from '@mui/material';
import theme from './theme.tsx';

const App: React.FC = () => {
	const [title, setTitle] = useState('Crypto Dashboard');
	return (
		<TitleContext.Provider value={{ title, setTitle }}>
			<CssBaseline />
			<GlobalStyles
				styles={{
					body: { backgroundColor: theme.palette.background.default },
				}}
			/>
			<AppRouter />
			<ToastContainer autoClose={3000} limit={3} position="top-right" />
		</TitleContext.Provider>
	);
};

export default App;
