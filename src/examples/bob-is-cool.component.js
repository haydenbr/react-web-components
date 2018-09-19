const template = document.createElement('template');
const styles = `
p {
	color: #f8981c;
}

`;
template.innerHTML = `
<style>${styles}</style>
<p><span id="name"></span> is cool!!!</p>
<slot></slot>
<hr />
<slot name="secondary-slot"></slot>
`;

class BobIsCool extends HTMLElement {
	constructor() {
		super();

		this._$name = undefined;
		this._name = '';

		this._changeHanlders = {};
		this._changeHanlders.name = (oldValue, newValue) => this.handleNameChange(oldValue, newValue);
	}

	handleNameChange(oldValue, newValue) {
		if (oldValue === newValue) {
			return;
		}

		this.name = newValue;
	}

	connectedCallback() {
		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.appendChild(template.content.cloneNode(true));

		this._$name = shadowRoot.querySelector('#name');
		this.name = this.getAttribute('name') || 'Bob';
	}

	get name() {
		return this._name;
	}

	set name(newName) {
		if (newName === this.name) {
			return;
		}

		this.setAttribute('name', newName);
		this._name = newName;
		this.render();
	}

	static get observedAttributes() {
		return ['name'];
	}

	attributeChangedCallback(attrName, oldValue, newValue) {
		let handler = this._changeHanlders[attrName];

		if (handler) {
			handler(oldValue, newValue);
		}
	}

	disconnectedCallback() {
		alert(`I'll get you Eh Steve, if it's that last thing I DOOOOOOOOOOO!`);
	}

	render() {
		this._$name.textContent = this.name;
	}
}

window.customElements.define('bob-is-cool', BobIsCool);
