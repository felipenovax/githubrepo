import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		@media (max-width: 1080px) {
			font-size: 93.75%;  /* 15px -> 16px === 16px*/
		}

		@media (max-width: 720px) {
			font-size: 87.5%;
		}
	}

	body, input, text-area, select, button {
		font: 400 1rem "Roboto", sans-serif;
	}

	#root {
		max-width: 960px;
		margin: 0 auto;
	}

	button {
		cursor: pointer;
	}

	a {
		color: inherit;
		text-decoration: none;
	}
`
