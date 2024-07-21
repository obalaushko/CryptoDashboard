import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import HeaderAppBar from '../Header/HeaderAppBar.tsx';
import { useState } from 'react';
import SideBar from '../Sidebar/Sidebar.tsx';

import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../Error/ErrorFallbacks.tsx';

interface MainLayoutProps {}

const MainLayout: React.FC<MainLayoutProps> = () => {
	const [toggleSidebar, setToggleSideBar] = useState(true);

	const handleTogglerSidebar = () => {
        setToggleSideBar(prevState => !prevState);
    };

	return (
		<Box className="crypto-dashboard">
			<SideBar toggleSidebar={toggleSidebar} />
			<HeaderAppBar
				toggleSideBar={toggleSidebar}
				handleTogglerSidebar={handleTogglerSidebar}
			/>

			<Container maxWidth="xl" className="crypto-dashboard__container">
				<ErrorBoundary FallbackComponent={ErrorFallback}>
					<Outlet />
				</ErrorBoundary>
			</Container>
		</Box>
	);
};

export default MainLayout;
