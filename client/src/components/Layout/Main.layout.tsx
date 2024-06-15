import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import HeaderAppBar from '../Header/HeaderAppBar.tsx';
import { useState } from 'react';
import SideBar from '../Sidebar/Sidebar.tsx';

interface MainLayoutProps {}

const MainLayout: React.FC<MainLayoutProps> = () => {
	const [openSidebar, setOpenSidebar] = useState(false);

	const handleToggleSidebar = () => {
		setOpenSidebar((openSidebar) => !openSidebar);
	};
	return (
		<Box
			className="crypto-dashboard"
			onClick={() => openSidebar && setOpenSidebar(false)}
		>
			<HeaderAppBar toggleSideBar={handleToggleSidebar} />
			<SideBar open={openSidebar} toggleSideBar={handleToggleSidebar} />

			<Container className="crypto-dashboard__container">
				<Outlet />
			</Container>
		</Box>
	);
};

export default MainLayout;
