import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Section from '../../Components/Section';
import Loader from '../../Components/Loader';
import Message from '../../Components/Message';
import Poster from '../../Components/Poster';

const Container = styled.div`
	padding: 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
	loading ? (
		<>
			<Helmet>
				<title>TV Shows</title>
			</Helmet>
			<Loader />
		</>
	) : (
		<Container>
			<Helmet>
				<title>TV Shows</title>
			</Helmet>
			{airingToday && airingToday.length > 0 && (
				<Section title="Airing Today">
					{airingToday.map(show => (
						<Poster
							key={show.id}
							id={show.id}
							imageUrl={show.poster_path}
							title={show.original_name}
							rating={show.vote_average}
							year={show.first_air_date.substring(0, 4)}
						/>
					))}
				</Section>
			)}
			{topRated && topRated.length > 0 && (
				<Section title="Top Rated Shows">
					{topRated.map(show => (
						<Poster
							key={show.id}
							id={show.id}
							imageUrl={show.poster_path}
							title={show.original_name}
							rating={show.vote_average}
							year={show.first_air_date.substring(0, 4)}
						/>
					))}
				</Section>
			)}
			{popular && popular.length > 0 && (
				<Section title="Popular Shows">
					{popular.map(show => (
						<Poster
							key={show.id}
							id={show.id}
							imageUrl={show.poster_path}
							title={show.original_name}
							rating={show.vote_average}
							year={show.first_air_date.substring(0, 4)}
						/>
					))}
				</Section>
			)}
			{error && <Message color="#e74c3c" text={error} />}
		</Container>
	);

TVPresenter.propTypes = {
	topRated: PropTypes.array,
	popular: PropTypes.array,
	airingToday: PropTypes.array,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string
};

export default TVPresenter;
