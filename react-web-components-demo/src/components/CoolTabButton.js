import React from 'react';

class CoolTabButton extends React.Component {
	constructor(props) {
		super(props);

		this.coolTabButtonRef = React.createRef();
		this.onTabSelect = this.onTabSelect.bind(this);
	}

	get nativeElement() {
		return this.coolTabButtonRef.current;
	}

	componentDidMount() {
		this.tabSelectListener = this.nativeElement.addEventListener('tabselect', (event) => this.onTabSelect(event));
	}

	componentWillUnmount() {
		this.nativeElement.addEventListener('tabselect', this.tabSelectListener);
	}

	onTabSelect(event) {
		if (this.props.onTabSelect) {
			this.props.onTabSelect(event);
		}
	}

	render() {
		return (
			<cool-tab-button value={this.props.value} ref={this.coolTabButtonRef}>
				{this.props.children}
			</cool-tab-button>
		);
	}
}

export default CoolTabButton;
