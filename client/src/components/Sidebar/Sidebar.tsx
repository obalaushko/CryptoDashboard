import { Box, Button, Container, Drawer } from '@mui/material';
interface SideBarProps {
	open: boolean;
	toggleSideBar: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ open, toggleSideBar }) => {
	return (
		<Drawer open={open} onClose={toggleSideBar}>
			<Box
				sx={{ width: 250 }}
				role="presentation"
				onClick={toggleSideBar}
				onKeyDown={toggleSideBar}
			>
				<Container sx={{mt: "2rem"}}>
					<p>Content goes here</p>
					<Button variant="contained" color="primary">Button</Button>
				</Container>
			</Box>
		</Drawer>
	);
};

export default SideBar;
