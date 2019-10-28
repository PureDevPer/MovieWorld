import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from 'react-router-dom';
import styled from 'styled-components';
import Home from '../Routes/Home';
import TV from '../Routes/TV';
import Header from './Header';
import Search from '../Routes/Search';
import Detail from '../Routes/Detail';
import Collection from '../Components/Collection';

const CollectionStyle = styled.div`
	display: flex;
	justify-content: center;
	margin: 30px;
`;

export default () => (
	<Router>
		<>
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/tv" component={TV} />
				<Route path="/search" component={Search} />
				<Route path="/movie/:id" component={Detail} />
				<Route path="/show/:id" component={Detail} />
				<Route
					path="/collection/:id"
					render={props => {
						return (
							<CollectionStyle>
								<Collection collectionId={parseInt(props.match.params.id)} />
							</CollectionStyle>
						);
					}}
				/>
				<Redirect from="*" to="/" />
			</Switch>
		</>
	</Router>
);
