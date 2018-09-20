import React from 'react';
import { Link } from 'react-router-dom';

import CoolSideMenu from './CoolSideMenu';
import CoolSideMenuTitle from './CoolSideMenuTitle';

class CoolSideMenuDemo extends React.Component {
	state = {
		menuOpen: false
	};

	constructor(props) {
		super(props);

		this.menuRef = React.createRef();

		this.openMenu = this.openMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
	}

	get menu() {
		return this.menuRef.current;
	}

	openMenu() {
		this.menu.open();
	}

	closeMenu() {
		this.menu.close();
	}

	render() {
		console.log(this.menuRef);

		return (
			<div>
				<CoolSideMenu ref={this.menuRef}>
					<CoolSideMenuTitle>
						Cool Menu
					</CoolSideMenuTitle>
					<Link to="/page-one">One</Link>
					<Link to="/page-two">Two</Link>
					<Link to="/page-three">Three</Link>
				</CoolSideMenu>

				<button onClick={this.openMenu}>open menu</button>
			</div>
		)
	}
}

export default CoolSideMenuDemo;
