import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ApolloProvider } from '@apollo/client';
import client from './graphql/apolloClient.ts';
import { ThemeProvider } from '@emotion/react';
import theme from './theme.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<ApolloProvider client={client}>
				<App />
			</ApolloProvider>
		</ThemeProvider>
	</React.StrictMode>
);
