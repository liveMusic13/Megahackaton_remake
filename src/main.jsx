import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './assets/styles/global.scss';
import EditingNewsTestProvider from './providers/EditingNewsTestProvider';
import SettingViewProvider from './providers/SettingViewProvider';
import Router from './routes/Router';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<SettingViewProvider>
				<EditingNewsTestProvider>
					<Router />
				</EditingNewsTestProvider>
			</SettingViewProvider>
		</Provider>
	</React.StrictMode>
);
