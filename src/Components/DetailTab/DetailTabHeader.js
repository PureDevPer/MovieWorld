import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: row;
	height: 50px;
	padding: 10px;
	position: relative;
`;

const Button = styled.button`
	background-color: transparent;
	border: none;
	color: white;
	font-size: 15px;
	width: 100px;
	&:focus {
		outline: 0;
	}
`;

const FocusLine = styled.div`
	width: 100px;
	background-color: #3498db;
	height: 3px;
	position: absolute;
	top: 45px;
	left: ${props => `${props.left}px`};
	transition: left 0.3s ease-in-out;
`;

const DetailTabHeader = ({
	isYoutube,
	isProduction,
	isCountry,
	isCreatedBy,
	selectedButton,
	handleClick
}) => {
	const arr = [];
	if (isYoutube) arr.push('youtube');
	if (isProduction) arr.push('production');
	if (isCountry) arr.push('country');
	if (isCreatedBy) arr.push('createdby');

	let i = 0;
	for (i = 0; i < arr.length; ++i) {
		if (arr[i] === selectedButton) {
			break;
		}
	}

	let focusLineLeft = i * 100;
	focusLineLeft += 10;

	return (
		<Container>
			{/* button */}
			{isYoutube && (
				<Button onClick={e => handleClick('youtube')}>Youtube</Button>
			)}
			{isProduction && (
				<Button onClick={e => handleClick('production')}>Production</Button>
			)}
			{isCountry && (
				<Button onClick={e => handleClick('country')}>Country</Button>
			)}
			{isCreatedBy && (
				<Button onClick={e => handleClick('createdby')}>Director</Button>
			)}
			{/* focus line */}
			<FocusLine left={focusLineLeft} />
		</Container>
	);
};

export default DetailTabHeader;
