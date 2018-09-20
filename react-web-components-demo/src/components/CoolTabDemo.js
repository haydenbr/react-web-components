import React from 'react';

import CoolTab from './CoolTab';
import CoolTabButton from './CoolTabButton';

import './CoolTabDemo.css';

class CoolTabDemo extends React.Component {
	state = {
		selectedTab: ''
	};

	constructor(props) {
		super(props);

		this.onTabChange = this.onTabChange.bind(this);
	}

	onTabChange(event) {
		const selectedTab = event.target.value;
		this.setState({ selectedTab });
	}

	render() {
		return (
			<div className="tab-container">
				<CoolTab onTabChange={this.onTabChange}>
					<CoolTabButton value="bob">Bob</CoolTabButton>
					<CoolTabButton value="sally">Sally</CoolTabButton>
					<CoolTabButton value="jimmy">Jimmy</CoolTabButton>
				</CoolTab>
			</div>
		);
	}
}

export default CoolTabDemo;
