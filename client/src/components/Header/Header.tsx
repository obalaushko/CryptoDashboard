import { Box } from '@mui/material';
import LanguageSwitcher from './LanguageSwitcher.tsx';
import theme from '@/theme.tsx';

const Header: React.FC = () => {
	return (
		<Box sx={{ height: '60px', position: 'fixed', top: 0, left: 0, background: theme.palette.background.paper}}>
			Header
			<LanguageSwitcher />
		</Box>
	);
};

export default Header;
