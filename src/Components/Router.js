import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';
import Header from './Header';
import Home from '../Routes/Home';
import Search from '../Routes/Search';
import TV from '../Routes/TV';
import Detail from '../Routes/Detail';

export default () => (
	<Router>
		<>
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/search" component={Search} />
				<Route path="/tv" component={TV} />
				<Route path="/movie/:id" component={Detail} />
				<Route path="/show/:id" component={Detail} />
				<Redirect from="*" to="/" />
			</Switch>
		</>
	</Router>
);
