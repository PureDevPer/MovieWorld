import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 90px);
	grid-column-gap: 10px;
	grid-row-gap: 20px;
	padding: 10px;
	justify-content: center;
	padding: 10px;
	padding-bottom: 20px;
`;

const GridItem = styled.div`
	width: 100%;
`;

const ImageContainer = styled.div`
	width: 100%;
	height: 90px;
	background-color: white;
	border-radius: 5px;
	display: flex;
	align-items: center;
`;

const Image = styled.img`
	width: 100%;
	height: auto;
`;

const Title = styled.p`
	margin-top: 10px;
	font-size: 14px;
	text-align: center;
	font-weight: 400;
`;

const DetailTabProduction = ({ productionList }) => {
	return (
		<Grid>
			{productionList.map(({ logo_path, name }) => (
				<GridItem key={name}>
					<ImageContainer>
						<Image
							src={
								logo_path
									? `https://image.tmdb.org/t/p/w200${logo_path}`
									: require('../../assets/no_poster.png')
							}
						/>
					</ImageContainer>
					<Title>{name}</Title>
				</GridItem>
			))}
		</Grid>
	);
};

DetailTabProduction.propTypes = {
	productionList: PropTypes.array.isRequired
};

export default DetailTabProduction;
