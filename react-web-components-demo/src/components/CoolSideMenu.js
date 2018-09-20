import React from 'react';

class CoolSideMenu extends React.Component {
	constructor(props) {
		super(props);

		this.ref = React.createRef();

		this.onMenuOpen = this.onMenuOpen.bind(this);
		this.onMenuClose = this.onMenuClose.bind(this);
	}

	get nativeElement() {
		return this.ref.current;
	}

	open() {
		this.nativeElement.open();
	}

	close() {
		this.nativeElement.close();
	}

	componentDidMount() {
		this.nativeElement.addEventListener('menuopen', (event) => this.onMenuOpen(event));
		this.nativeElement.addEventListener('menuclose', (event) => this.onMenuClose(event));
	}

	componentWillUnmount() {
		this.nativeElement.removeEventListener('menuopen');
		this.nativeElement.removeEventListener('menuclose');
	}

	onMenuOpen(event) {
		if (this.props.onMenuOpen) {
			this.props.onMenuOpen(event);
		}
	}

	onMenuClose(event) {
		if (this.props.onMenuClose) {
			this.props.onMenuClose(event);
		}
	}

	render() {
		return (
			<cool-side-menu ref={this.ref}>
				{this.props.children}
			</cool-side-menu>
		);
	}
}

export default CoolSideMenu;
