const styles = `
p {
	color: #f8981c;
}
`;

const template = `
<style>${styles}</style>
<p><span id="name"></span> is cool!!!</p>
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
		this.innerHTML = template;

		this._$name = this.querySelector('#name');
		this.name = this.getAttribute('name') || 'Bob';
	}

	get name() {
		return this._name;
	}

	set name(newName) {
		if (newName === this.name) {
			return;
		}

		this._$name.textContent = newName;
		this.setAttribute('name', newName);
		this._name = newName;
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
		console.log('You haven\'t seen the last of me ...');
	}
}

window.customElements.define('bob-is-cool', BobIsCool);
