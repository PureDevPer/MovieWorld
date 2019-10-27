import React, { Component } from 'react';

class DetailContainer extends Component {
	state = {
		result: null,
		error: null,
		loading: true
	};

	render() {
		const { result, error, loading } = this.state;
		return <DetailContainer result={result} error={error} loading={loading} />;
	}
}

export default DetailContainer;
