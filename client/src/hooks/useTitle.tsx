import { TitleContext } from '@/context/Context.ts';
import { useContext, useEffect } from 'react';

/**
 * Custom hook that updates the document title based on the value provided by the TitleContext.
 * @returns The value of the TitleContext.
 * @throws {Error} If used outside of a TitleProvider.
 */
export const useTitle = () => {
	const context = useContext(TitleContext);
	if (context === undefined) {
		throw new Error('useTitle must be used within a TitleProvider');
	}

	useEffect(() => {
		const title = `${context.title} - Dance bot (TG)`;
		document.title = title;
		window.history.pushState({}, title, document.location.pathname);
	}, [context.title]);

	return context;
};
