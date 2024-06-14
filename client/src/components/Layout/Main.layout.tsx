import { Outlet } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import SideBar from '../Sidebar/Sidebar.tsx';
import HeaderAppBar from '../Header/HeaderAppBar.tsx';

interface MainLayoutProps {
	// Define any props that the component accepts
}

const MainLayout: React.FC<MainLayoutProps> = () => {
	return (
		<Box className="crypto-dashboard">
			<HeaderAppBar />
			<SideBar />
			<Grid container className="crypto-dashboard__container">
				<Outlet />
			</Grid>
		</Box>
	);
};

export default MainLayout;
