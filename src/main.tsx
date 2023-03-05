import App from './App'
import GlobalStyle from './styles/globalStyles'
import theme from './styles/theme'

import data from '../data.json'

import { ThemeProvider } from 'styled-components'
import ReactDOM from 'react-dom/client'
import React from 'react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<App data={JSON.parse(JSON.stringify(data))} />
		</ThemeProvider>
	</React.StrictMode>,
)
