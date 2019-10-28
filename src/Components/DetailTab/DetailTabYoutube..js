import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Iframe = styled.iframe`
	width: 100%;
	padding: 20px;
	padding-top: 10px;
`;

const DetailTabYoutube = ({ youtubeID }) => {
	return (
		<Iframe
			title="trailor"
			width="560"
			height="315"
			src={`https://www.youtube.com/embed/${youtubeID}`}
			frameBorder="0"
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
		/>
	);
};

DetailTabYoutube.propTypes = {
	youtubeID: PropTypes.string
};

export default DetailTabYoutube;
