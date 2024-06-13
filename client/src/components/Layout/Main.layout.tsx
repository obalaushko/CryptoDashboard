import { Outlet } from 'react-router-dom';
import { useTitle } from '@/hooks/useTitle.tsx';
import { Box, Grid } from '@mui/material';

interface MainLayoutProps {
	// Define any props that the component accepts
}

const MainLayout: React.FC<MainLayoutProps> = () => {
	const { title } = useTitle();

	return (
		<Grid container>
			<Box className="crypto-dashboard">
				<div>
					<span>{title}</span>
				</div>
				<div className="container">
					<Outlet />
				</div>
			</Box>
		</Grid>
	);
};

export default MainLayout;
