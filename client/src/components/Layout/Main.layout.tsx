import { Outlet } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
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
			<Grid container className="crypto-dashboard__container">
				<Outlet />
			</Grid>
		</Box>
	);
};

export default MainLayout;
