import React from 'react';

import CoolTab from './CoolTab';
import CoolTabButton from './CoolTabButton';

import './CoolTabDemo.css';

import homestar from '../images/homestar.jpg';
import marzipan from '../images/marzipan.png';
import strongbad from '../images/sb-tech.png';

const imageMap = {
	homestar,
	marzipan,
	strongbad
};

class CoolTabDemo extends React.Component {
	state = {
		selectedTab: ''
	};

	constructor(props) {
		super(props);

		this.onTabChange = this.onTabChange.bind(this);
		this.getImage = this.getImage.bind(this);
	}

	onTabChange(event) {
		const selectedTab = event.target.value;
		this.setState({ selectedTab });
	}

	getImage() {
		return imageMap[this.state.selectedTab];
	}

	render() {
		return (
			<div className="tab-container">
				<CoolTab onTabChange={this.onTabChange}>
					<CoolTabButton value="homestar">Homestar</CoolTabButton>
					<CoolTabButton value="marzipan">Marzipan</CoolTabButton>
					<CoolTabButton value="strongbad">Strong Bad</CoolTabButton>
				</CoolTab>

				<img id="character-image" src={this.getImage()}/>
			</div>
		);
	}
}

export default CoolTabDemo;
