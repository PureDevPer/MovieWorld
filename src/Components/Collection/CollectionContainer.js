import React, { Component } from 'react';
import propTypes from 'prop-types';
import CollectionPresenter from './CollectionPresenter';
import { collection } from '../../api';

class CollectionContainer extends Component {
	state = {
		collectionList: null,
		loading: true
	};

	async componentDidMount() {
		const { collectionId } = this.props;
		try {
			const {
				data: { parts: collectionList }
			} = await collection.getDetail(collectionId);

			this.setState({ collectionList });
		} catch {
			this.setState({ error: "Can't find collection" });
		} finally {
			this.setState({ loading: false });
		}
	}

	render() {
		const { loading, error, collectionList } = this.state;

		return (
			<CollectionPresenter
				loading={loading}
				error={error}
				collectionList={collectionList}
			/>
		);
	}
}

CollectionContainer.propTypes = {
	collectionId: propTypes.number.isRequired
};

export default CollectionContainer;
