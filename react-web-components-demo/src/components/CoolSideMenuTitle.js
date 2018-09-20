import React from 'react';

function CoolSideMenuTitle(props) {
	return (
		<div slot="menu-title">
		{props.children}
		</div>
	);
}

export default CoolSideMenuTitle;
