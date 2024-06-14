import { Box, IconButton, styled } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ENFlagIcon from '@assets/flag-united-kingdom.svg?react';
import UKFlagIcon from '@assets/flag-ukraine.svg?react';

const StyledIconButton = styled(IconButton)(() => ({
	'& svg': {
		filter: 'brightness(0.4)',
		transition: 'filter 0.3s ease',
	},
	'&.active svg': {
		filter: 'brightness(1)',
	},
	'&:hover svg': {
		filter: 'brightness(1)',
	},
	'&:active svg': {
		filter: 'brightness(1)',
	},
}));

const LanguageSwitcher: React.FC = () => {
	const { i18n } = useTranslation();
	const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

	useEffect(() => {
		const handleLanguageChanged = (lng: string) => {
			setCurrentLanguage(lng);
		};
		i18n.on('languageChanged', handleLanguageChanged);
		return () => {
			i18n.off('languageChanged', handleLanguageChanged);
		};
	}, [i18n]);

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
	};

	return (
		<Box>
			<StyledIconButton
				size="medium"
				aria-label="English"
				color="inherit"
				onClick={() => changeLanguage('en')}
				className={currentLanguage === 'en' ? 'active' : ''}
			>
				<ENFlagIcon width={35} height={35} />
			</StyledIconButton>
			<StyledIconButton
				size="medium"
				aria-label="Ukrainian"
				color="inherit"
				onClick={() => changeLanguage('uk')}
				className={currentLanguage === 'uk' ? 'active' : ''}
			>
				<UKFlagIcon width={35} height={35} />
			</StyledIconButton>
		</Box>
	);
};

export default LanguageSwitcher;
