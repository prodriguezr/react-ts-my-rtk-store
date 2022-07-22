import { ReactNode } from 'react';
import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';

import { appMUITheme } from './appMUITheme';

type AppThemeProps = {
	children?: ReactNode;
};

export const AppTheme = ({ children }: AppThemeProps) => {
	return (
		<ThemeProvider theme={appMUITheme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};
