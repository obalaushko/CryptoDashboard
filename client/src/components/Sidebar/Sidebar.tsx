import { Drawer } from "@mui/material";
interface SideBarProps {
	open: boolean;

}

const SideBar: React.FC<SideBarProps> = ({open}) => {
	return (
		<Drawer open={open}>
			teadsf
		</Drawer>
	);
};

export default SideBar;
