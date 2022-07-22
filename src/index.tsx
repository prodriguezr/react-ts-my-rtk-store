import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material';

import App from 'app';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<StyledEngineProvider injectFirst>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</StyledEngineProvider>
	</React.StrictMode>
);
