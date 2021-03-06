import styled from 'styled-components';

export const ClockContainer = styled.div`
	/* display: flex;
	justify-content: center;
	align-items: center;
	width: 90vw;
	max-width: 500px; */
	> input {
		color: ${(props) => props.theme.text};
	}
`;

export const DialDivider = styled.span`
	/* font-size: 3rem;
	font-weight: bold;
	opacity: 1;
	transition: 0.25s ease all; */
	color: ${(props) => props.theme.text};
	/* &.blip {
		animation-name: blip;
		animation-duration: 1s;
		animation-iteration-count: infinite;
	}
	@keyframes blip {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	} */
`;
