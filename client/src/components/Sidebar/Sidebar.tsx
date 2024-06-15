import { Box, Drawer } from '@mui/material';
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
				Content goes here
			</Box>
		</Drawer>
	);
};

export default SideBar;
