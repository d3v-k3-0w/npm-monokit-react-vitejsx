import styled from '@emotion/styled';

export const FormContainer = styled.form`
	display: flex;
	justify-content: center;
	padding-top: 0.1em;
	padding-bottom: 0.1rem;
	border-radius: 5px;
	background-color: var(--theme-body-bg);
	margin: 0 auto 30px;
`;

export const InputSearch = styled.input`
	border-radius: 5px;
	border: 1px solid transparent;
	padding: 0.6em 1.2em;
	margin-right: 5px;
	font-size: 1em;
	font-weight: 500;
	font-family: inherit;
	background-color: var(mine-shaft);
	cursor: pointer;
	transition: outline-color 0.3s ease-in-out;

	&:focus,
	&:focus-visible {
		outline: 1px solid var(--concrete);
	}
`;

export const Select = styled.select`
	-moz-appearance: none;
	-webkit-appearance: none;
	-webkit-appearance: none;
	appearance: none;
	background-color: #fff;
	background: #fff;
	color: #000;
	border: 0;
	border-left: 1px solid #ccc;
	border-radius: 5px;
	line-height: 1.3;
	margin: 0;
	max-width: 100%;
	padding: 1px 3px;
	background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
	background-repeat: no-repeat, repeat;
	background-position: right 0.7em top 50%;
	background-size: 0.65em auto;
`;
