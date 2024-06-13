import Dashboard from '@/pages/Dashboard/Dashboard.tsx';
import Home from '@/pages/Home/Home.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from './routes.ts';
import MainLayout from '@/components/Layout/Main.layout.tsx';
import NotFount from '@/pages/404/NotFound.tsx';

const AppRouter: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={ROUTES.Home} element={<MainLayout />}>
					<Route path={ROUTES.Home} element={<Home />} />
					<Route path={ROUTES.Dashboard} element={<Dashboard />} />
				</Route>
				<Route path={ROUTES.NotFound} element={<NotFount />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
