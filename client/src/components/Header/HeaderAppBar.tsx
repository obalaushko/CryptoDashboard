import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
// import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LanguageSwitcher from './LanguageSwitcher.tsx';
import theme from '@/theme.tsx';

interface HeaderAppBarProps {
	toggleSideBar: () => void;
}

const HeaderAppBar: React.FC<HeaderAppBarProps> = ({ toggleSideBar }) => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const isMenuOpen = Boolean(anchorEl);

	const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const renderProfileMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
		</Menu>
	);

	return (
		<AppBar
			position="sticky"
			sx={{ background: theme.palette.background.paper }}
		>
			<Toolbar>
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="open drawer"
					sx={{ mr: 2 }}
					onClick={() => toggleSideBar()}
				>
					<MenuIcon />
				</IconButton>
				<Box sx={{ flexGrow: 1 }} />
				<Box sx={{ display: { md: 'flex' } }}>
					<LanguageSwitcher />
					<IconButton
						size="large"
						aria-label="Settings"
						color="inherit"
					>
						<SettingsRoundedIcon />
					</IconButton>
					<IconButton
						size="large"
						edge="end"
						aria-label="account of current user"
						aria-haspopup="true"
						onClick={handleProfileMenuOpen}
						color="inherit"
					>
						<AccountCircle />
					</IconButton>
				</Box>
			</Toolbar>
			{renderProfileMenu}
		</AppBar>
	);
};

export default HeaderAppBar;
