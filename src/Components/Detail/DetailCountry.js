import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px 40px;
`;

const Item = styled.span`
	font-size: 14px;
	font-weight: 400;

	&:not(:last-child) {
		margin-bottom: 10px;
	}
`;

const DetailTabCountry = ({ countryList }) => {
	return (
		<Container>
			{countryList.map(country => (
				<Item key={country.iso_3166_1}>{country.name}</Item>
			))}
		</Container>
	);
};

export default DetailTabCountry;
