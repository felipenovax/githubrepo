import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './Routes'
import { GlobalStyle } from './styles/global'
import { HeaderMenu, Wrapper } from './styles'

const App: React.FC = () => {
	return (
		<>
			<HeaderMenu>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/">Repositorio</a>
					</li>
				</ul>
			</HeaderMenu>
			<Wrapper>
				<BrowserRouter>
					<Routes />
				</BrowserRouter>
				<GlobalStyle />
			</Wrapper>
		</>
	)
}

export default App
