import React from 'react';

class CoolTab extends React.Component {
	constructor(props) {
		super(props);

		this.coolTabRef = React.createRef();
	}

	get nativeElement() {
		return this.coolTabRef.current;
	}

	componentDidMount() {
		this.tabChangeListener = this.nativeElement.addEventListener('tabchange', (event) => this.onTabChange(event));
	}

	componentWillUnmount() {
		this.nativeElement.addEventListener('tabchange', this.tabChangeListener);
	}

	onTabChange(event) {
		if (this.props.onTabChange) {
			this.props.onTabChange(event);
		}
	}

	render() {
		return (
			<cool-tab ref={this.coolTabRef}>
				{this.props.children}
			</cool-tab>
		);
	}
}

export default CoolTab;
