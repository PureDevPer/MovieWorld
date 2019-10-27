import React, { Component } from 'react';
import TVPresenter from './TVPresenter';

class TVContainer extends Component {
	state = {
		topRated: null,
		popular: null,
		airingToday: null,
		loading: true,
		error: null
	};
	render() {
		const { topRated, popular, airingToday, loading, error } = this.state;
		return (
			<TVPresenter
				topRated={topRated}
				popular={popular}
				airingToday={airingToday}
				loading={loading}
				error={error}
			/>
		);
	}
}

export default TVContainer;
