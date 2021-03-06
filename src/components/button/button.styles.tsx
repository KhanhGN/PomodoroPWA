import styled from 'styled-components';

export const BaseButton = styled.button`
	/* margin: 20px;
	padding: 20px;
	border-radius: 20px;
	background-color: var(--color-grey);
	font-weight: bold;
	font-size: 1.2rem;
	width: 166px;
	letter-spacing: 1.5px; */
	color: ${(props) => props.theme.text};
	/* border: 3px solid var(--color-secondary); */
	/* border: none;
	transition: 0.25s ease all;
	&:hover {
		background-color: var(--color-lighter-grey);
		cursor: pointer;
		border-color: var(--color-primary);
	} */
`;

export const FormButton = styled(BaseButton)`
	/* width: 96%;
	margin: 10px auto; */
	color: white;
	background-color: ${(props) => props.theme.secondary};
	&:hover {
		background-color: ${(props) => props.theme.primary};
	}
`;
