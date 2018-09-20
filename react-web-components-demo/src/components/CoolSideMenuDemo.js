import React from 'react';

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
					<a href="#">One</a>
					<a href="#">Two</a>
					<a href="#">Three</a>
				</CoolSideMenu>

				<button onClick={this.openMenu}>open menu</button>
			</div>
		)
	}
}

export default CoolSideMenuDemo;
