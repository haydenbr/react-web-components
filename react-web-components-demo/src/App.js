import React, { Component } from 'react';

import Header from './components/Header';

import 'examples';

import './images/homestar.jpg';
import CoolTabDemo from './components/CoolTabDemo';
import CoolSideMenuDemo from './components/CoolSideMenuDemo';

class App extends Component {
  render() {
    return (
			<div>
				<Header />
				<CoolSideMenuDemo />
				<CoolTabDemo />
			</div>
    );
  }
}

export default App;
