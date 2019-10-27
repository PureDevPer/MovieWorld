import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Loader from '../../Components/Loader';
import Section from '../../Components/Section';
import Message from '../../Components/Message';
import Poster from '../../Components/Poster';

const Container = styled.div`
	padding: 20px;
`;

const Form = styled.form`
	margin-bottom: 50px;
	width: 100%;
`;

const Input = styled.input`
	all: unset;
	font-size: 28px;
	width: 100%;
`;

const SearchPresenter = ({
	movieResults,
	tvResults,
	loading,
	searchTerm,
	handleSubmit,
	error,
	updateTerm
}) => (
	<Container>
		<Helmet>
			<title>Search</title>
		</Helmet>
		<Form onSubmit={handleSubmit}>
			<Input
				placeholder="Search Movies or TV Shows ..."
				value={searchTerm}
				onChange={updateTerm}
			/>
		</Form>
		{loading ? (
			<Loader />
		) : (
			<>
				{movieResults && movieResults.length > 0 && (
					<Section title="Movie Results">
						{movieResults.map(movie => (
							<Poster
								key={movie.id}
								id={movie.id}
								imageUrl={movie.poster_path}
								title={movie.original_title}
								rating={movie.vote_average}
								year={movie.release_date.substring(0, 4)}
								isMovie={true}
							/>
						))}
					</Section>
				)}
				{tvResults && tvResults.length > 0 && (
					<Section title="TV Show Results">
						{tvResults.map(tvShow => (
							<Poster
								key={tvShow.id}
								id={tvShow.id}
								imageUrl={tvShow.poster_path}
								title={tvShow.original_name}
								rating={tvShow.vote_average}
								year={tvShow.first_air_date.substring(0, 4)}
							/>
						))}
						{error && <Message color="#e74c3c" text={error} />}
						{tvResults &&
							movieResults &&
							tvResults === 0 &&
							movieResults === 0 && (
								<Message color="#95a5a6" text="Nothing found" />
							)}
					</Section>
				)}
			</>
		)}
	</Container>
);

SearchPresenter.propTypes = {
	movieResults: PropTypes.array,
	tvResults: PropTypes.array,
	error: PropTypes.string,
	searchTerm: PropTypes.string,
	loading: PropTypes.bool.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;
