const template = document.createElement('template');
const style = `
:host {
	--tab-button-border-width: 3px;
	--tab-button-color: #6f7dbc;

	border: var(--tab-button-border-width) solid var(--tab-button-color);
	flex-grow: 1;
}

:host(:not(:first-of-type)) {
	border-left-width: 0;
}

#tab-inner {
	background-color: #fff;
	color: var(--tab-button-color);
	cursor: pointer;
	font-size: 18px;
	padding: 10px;
	text-align: center;
	user-select: none
}

#tab-inner[selected] {
	background-color: var(--tab-button-color);
	color: #fff;
}
`;

template.innerHTML = `
<style>${style}</style>
<div id="tab-inner">
	<slot></slot>
</div>
`;

class CoolTabButton extends HTMLElement {
	constructor() {
		super();

		this._selected = false;
	}

	connectedCallback() {
		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.appendChild(template.content.cloneNode(true));

		this.value = this.getAttribute('value');
		this.$tabInner = this.shadowRoot.querySelector('#tab-inner');
		this.$tabInner.addEventListener('click', () => this.selected = true);
	}

	get selected() {
		return this._selected;
	}

	set selected(selected) {
		if (selected === this._selected) {
			return;
		}

		this._selected = selected;

		if (this.selected) {
			this.$tabInner.setAttribute('selected', '');
			this.dispatchEvent(new CustomEvent('tabselect', { bubbles: true }));
		} else {
			this.$tabInner.removeAttribute('selected');
		}
	}
}

window.customElements.define('cool-tab-button', CoolTabButton);
