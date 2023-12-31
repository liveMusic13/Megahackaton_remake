import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './assets/styles/global.scss';
import EditingNewsTestProvider from './providers/EditingNewsTestProvider';
import FilterProvider from './providers/FilterProvider';
import SaveInFolderProvider from './providers/SaveInFolderProvider';
import SearchTermProvider from './providers/SearchTermProvider';
import SettingViewProvider from './providers/SettingViewProvider';
import ShareEmailProvider from './providers/ShareEmailProvider';
import ThemeProvider from './providers/ThemeProvider';
import Router from './routes/Router';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
	<ThemeProvider>
		<FilterProvider>
			<Provider store={store}>
				<SaveInFolderProvider>
					<ShareEmailProvider>
						<SearchTermProvider>
							<SettingViewProvider>
								<EditingNewsTestProvider>
									<Router />
								</EditingNewsTestProvider>
							</SettingViewProvider>
						</SearchTermProvider>
					</ShareEmailProvider>
				</SaveInFolderProvider>
			</Provider>
		</FilterProvider>
	</ThemeProvider>

	// </React.StrictMode>
);
