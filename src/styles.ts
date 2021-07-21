import styled from 'styled-components'
import imgBackground from './assets/background.svg'

export const HeaderMenu = styled.nav`
	background: #ffffff;
	width: 960px;
	z-index: 900;
	box-shadow: 0 2px 1px #cccccc;
	height: 45px;
	position: fixed;
	top: 0;

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow: hidden;
		background-color: #333;
	}

	li {
		float: left;
	}

	li a {
		display: block;
		color: white;
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
	}

	li a:hover {
		background-color: #111;
	}
`

export const Wrapper = styled.section`
	margin-top: 45px;
	padding: 2.5rem 1.25rem;
	background: #f0f0f5 url(${imgBackground}) no-repeat 70% top;
	-webkit-font-smooth: antialiased;
`
