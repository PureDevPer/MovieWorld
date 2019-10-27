import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';
import Home from '../Routes/Home';
import Search from '../Routes/Search';
import TV from '../Routes/TV';
import Header from './Header';

export default () => (
	<Router>
		<>
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/search" component={Search} />
				<Route path="/tv" component={TV} />
				<Redirect from="*" to="/" />
			</Switch>
		</>
	</Router>
);
