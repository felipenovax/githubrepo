import styled from 'styled-components'

export const SpinnerLoading = styled.div`
	position: absolute;
	top: 50%;
	right: 50%;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	border: 6px solid rgba(255, 255, 255, 0.1);
	border-top-color: #09d;
	animation: spin 1s linear infinite;

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
`
