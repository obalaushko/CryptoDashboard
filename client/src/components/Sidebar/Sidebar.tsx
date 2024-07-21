import { ROUTES } from '@/router/routes.ts';
import {
	Box,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material';
import clsx from 'clsx';
import { Link, NavLink } from 'react-router-dom';
import AnimateLogo from '../Logo/AnimateLogo.tsx';
import dashboardMenu from '@/constants/Menu.tsx';

import './sidebar.scss';
interface SideBarProps {
	toggleSidebar: boolean;
}

export const NestedList = () => {
	return dashboardMenu.map((item) => (
		<ListItem className="sidebar__button" key={item.name}>
			<NavLink
				to={{
					pathname: item.url,
				}}
				className="sidebar__link"
			>
				<ListItemIcon>{item.icon}</ListItemIcon>
				<ListItemText>{item.name}</ListItemText>
			</NavLink>
		</ListItem>
	));
};

const SideBar: React.FC<SideBarProps> = ({ toggleSidebar }) => {
	return (
		<Box className={clsx('crypto-dashboard__sidebar sidebar', { hidden: !toggleSidebar })}>
			<Box className="sidebar__logo">
				<Typography
					className="sidebar__title"
					variant="h6"
					component="div"
					sx={{ flexGrow: 1 }}
				>
					<Link className="sidebar__title-link" to={ROUTES.Dashboard}>
						<AnimateLogo />
					</Link>
				</Typography>
			</Box>
			<Box className="sidebar__menu">
				<List
					sx={{
						width: '100%',
						maxWidth: 360,
						bgcolor: 'background.paper',
					}}
					component="nav"
					aria-labelledby="nested-list-subheader"
					className="sidebar__list"
					// subheader={
					//   <ListSubheader component="div" id="nested-list-subheader">
					//     Nested List Items
					//   </ListSubheader>
					// }
				>
					<NestedList />
				</List>
			</Box>
		</Box>
	);
};

export default SideBar;
