import React from 'react';
import {
	HashRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';
import Home from '../Routes/Home';
import Search from '../Routes/Search';
import TV from '../Routes/TV';

export default () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/search" component={Search} />
			<Route exact path="/tv" component={TV} />
			<Redirect from="*" to="/" />
		</Switch>
	</Router>
);
