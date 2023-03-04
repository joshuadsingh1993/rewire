import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import GlobalStyle from './styles/globalStyles'
import theme from './styles/theme'
import data from '../data.json'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<App data={JSON.parse(JSON.stringify(data))} />
		</ThemeProvider>
	</React.StrictMode>,
)
