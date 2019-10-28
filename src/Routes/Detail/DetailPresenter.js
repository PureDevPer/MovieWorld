import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Loader from '../../Components/Loader';
import DetailTabContainer from '../../Components/DetailTab/DetailTabContainer';
import Collection from '../../Components/Collection';
import Season from '../../Components/Season';

const Container = styled.div`
	height: calc(100vh - 50px);
	width: 100%;
	position: relative;
	padding: 30px;
`;

const Backdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: url(${props => props.bgImage});
	background-position: center center;
	background-size: cover;
	filter: blur(3px);
	opacity: 0.5;
	z-index: 0;
`;

const Content = styled.div`
	display: flex;
	width: 100%;
	position: relative;
	z-index: 1;
`;

const Cover = styled.img`
	/*
	width: 30%;
	background-image: url(${props => props.bgImage});
	background-position: center center;
	background-size: cover;
	height: 100%;
	*/

	display: none;
	border-radius: 5px;
	z-index: 0;
	position: sticky;

	@media only screen and (max-width: 1024px) {
		display: inline-block;
		margin-bottom: 30px;
		width: 100%;
		max-width: 450px;
	}

	@media only screen and (min-width: 1024px) {
		display: inline-block;
		position: sticky;
		top: 80px;
		height: calc(100vh - 100px);
	}
`;

const Data = styled.div`
	/*
	width: 70%;
	margin-left: 10px;
	*/

	max-width: 450px;
	margin-left: 30px;

	@media only screen and (max-width: 1024px) {
		margin-left: 0;
	}
`;

const Title = styled.h3`
	font-size: 32px;
`;

const ItemContainer = styled.div`
	margin: 20px 0;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const Item = styled.span``;

const IMDBLink = styled.a``;

const IMDB = styled.img`
	height: 15px;
`;

const Divider = styled.span`
	margin: 0 10px;
`;

const OverView = styled.p`
	font-size: 12px;
	opacity: 0.7;
	line-height: 1.5;
	width: 90%;
	text-align: justify;
`;

const CollectionTitle = styled.div`
	font-size: 32px;
	margin-bottom: 20px;
`;

const DetailPresenter = ({ result, loading, error, location }) => {
	let isTabExist = false;

	if (result) {
		const {
			videos: { results },
			production_companies,
			production_countries,
			created_by
		} = result;
		if (results && results.length > 0) {
			isTabExist = true;
		} else if (production_companies && production_companies.length > 0) {
			isTabExist = true;
		} else if (production_countries && production_countries.length > 0) {
			isTabExist = true;
		} else if (created_by && created_by.length > 0) {
			isTabExist = true;
		}
	}

	let isSeasonExist = location.pathname.includes('show');

	return loading ? (
		<>
			<Helmet>
				<title>Loading | Detail</title>
			</Helmet>
			<Loader />
		</>
	) : (
		<Container>
			<Helmet>
				<title>
					{result.original_title ? result.original_title : result.original_name}{' '}
					| Detail
				</title>
			</Helmet>
			<Backdrop
				bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
			/>
			<Content>
				<Cover
					src={
						result.poster_path
							? `https://image.tmdb.org/t/p/original${result.poster_path}`
							: require('../../assets/no_poster.png')
					}
				/>
				<Data>
					<Title>
						{' '}
						{result.original_title
							? result.original_title
							: result.original_name}{' '}
					</Title>
					<ItemContainer>
						<Item>
							{result.release_date
								? result.release_date.substring(0, 4)
								: result.first_air_date.substring(0, 4)}
						</Item>
						<Divider>•</Divider>
						<Item>
							{result.runtime ? result.runtime : result.episode_run_time[0]} min
						</Item>
						<Divider>•</Divider>
						<Item>
							{result.genres &&
								result.genres.map((genre, index) =>
									index === result.genres.length - 1
										? genre.name
										: `${genre.name} / `
								)}
						</Item>
						<Divider>•</Divider>
						<Item>
							{result.imdb_id && result.imdb_id.length > 0 && (
								<IMDBLink
									href={'https://www.imdb.com/title/' + result.imdb_id}
									target="_blank"
								>
									<IMDB src={require('../../assets/IMDb.png')} />
								</IMDBLink>
							)}
						</Item>
					</ItemContainer>
					<OverView>{result.overview}</OverView>
					{isTabExist && <DetailTabContainer data={result} />}
					{result.belongs_to_collection && (
						<>
							<Link to={`/collection/${result.belongs_to_collection.id}`}>
								<CollectionTitle>Collection</CollectionTitle>
							</Link>
							<Collection collectionId={result.belongs_to_collection.id} />
						</>
					)}
					{isSeasonExist && result.seasons && result.seasons.length > 0 && (
						<Season seasonList={result.seasons} />
					)}
				</Data>
			</Content>
		</Container>
	);
};
DetailPresenter.propTypes = {
	result: PropTypes.object,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string
};

export default withRouter(({ result, loading, error, location }) => (
	<DetailPresenter
		result={result}
		loading={loading}
		error={error}
		location={location}
	/>
));
