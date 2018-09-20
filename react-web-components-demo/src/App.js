import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';

import 'examples';

import './images/homestar.jpg';
import CoolTabDemo from './components/CoolTabDemo';
import CoolSideMenuDemo from './components/CoolSideMenuDemo';

function Home() {
	return (
		<div>
			<CoolTabDemo />
		</div>
	);
}

function PageOne() {
	return <h1>Page One</h1>;
}

function PageTwo() {
	return <h1>Page Two</h1>;
}

function PageThree() {
	return <h1>Page Three</h1>;
}

class App extends Component {
  render() {
    return (
			<Router>
				<div>
					<Header />
					<CoolSideMenuDemo />
					<Route exact path="/" component={Home}/>
					<Route path="/page-one" component={PageOne} />
					<Route path="/page-two" component={PageTwo} />
					<Route path="/page-three" component={PageThree} />
				</div>
			</Router>
    );
  }
}

export default App;
