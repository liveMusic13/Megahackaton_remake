import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './assets/styles/global.scss';
import EditingNewsTestProvider from './providers/EditingNewsTestProvider';
import FilterProvider from './providers/FilterProvider';
import SearchTermProvider from './providers/SearchTermProvider';
import SettingViewProvider from './providers/SettingViewProvider';
import ThemeProvider from './providers/ThemeProvider';
import Router from './routes/Router';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
	<ThemeProvider>
		<FilterProvider>
			<Provider store={store}>
				<SearchTermProvider>
					<SettingViewProvider>
						<EditingNewsTestProvider>
							<Router />
						</EditingNewsTestProvider>
					</SettingViewProvider>
				</SearchTermProvider>
			</Provider>
		</FilterProvider>
	</ThemeProvider>

	// </React.StrictMode>
);
