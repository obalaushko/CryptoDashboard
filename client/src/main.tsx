import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ApolloProvider } from '@apollo/client';
import client from './graphql/apolloClient.ts';
import { ThemeProvider } from '@emotion/react';
import theme from './theme.tsx';
import { I18nextProvider } from 'react-i18next';
import i18n from './config/i18n.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<I18nextProvider i18n={i18n}>
			<ThemeProvider theme={theme}>
				<ApolloProvider client={client}>
					<App />
				</ApolloProvider>
			</ThemeProvider>
		</I18nextProvider>
	</React.StrictMode>
);
