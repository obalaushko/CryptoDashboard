import { Box, Button, IconButton, Popover } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';

const LanguageSwitcher: React.FC = () => {
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;
	const { i18n } = useTranslation();

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
	};

	return (
		<Box>
			<IconButton
				size="large"
				aria-label="Translate"
				color="inherit"
				onClick={handleClick}
			>
				<TranslateRoundedIcon />
			</IconButton>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
			>
				<Button color="inherit" onClick={() => changeLanguage('en')}>
					EN
				</Button>
				<Button color="inherit" onClick={() => changeLanguage('uk')}>
					UK
				</Button>
			</Popover>
		</Box>
	);
};

export default LanguageSwitcher;
