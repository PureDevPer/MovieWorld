import React, { Component } from 'react';
import SearchPresenter from './SearchPresenter';
import { moviesApi, tvApi } from '../../api';

class SearchContainer extends Component {
	state = {
		movieResults: null,
		tvResults: null,
		searchTerm: '',
		loading: false,
		error: null
	};

	handleSubmit = () => {
		const { searchTerm } = this.state;
		if (searchTerm !== '') this.searchByTerm();
	};

	searchByTerm = async () => {
		const { searchTerm } = this.state;
		this.setState({ loading: true });

		try {
			const {
				data: { result: movieResults }
			} = await moviesApi.search(searchTerm);
			const {
				data: { result: tvResults }
			} = await tvApi.search(searchTerm);

			this.setState({ movieResults, tvResults });
		} catch {
			this.setState({ error: "Can't find search result" });
		} finally {
			this.setState({ loading: false });
		}
	};

	render() {
		const { movieResults, tvResults, searchTerm, loading, error } = this.state;
		return (
			<SearchPresenter
				movieResults={movieResults}
				tvResults={tvResults}
				searchTerm={searchTerm}
				loading={loading}
				error={error}
				handleSubmit={this.handleSubmit}
			/>
		);
	}
}

export default SearchContainer;
