const template = document.createElement('template');
const style = `
:host {
	--border-width: 3px;
	--color: #6f7dbc;

  display: flex;
  align-items: center;
  justify-content: center;
}

::slotted(cool-tab-button) {
	--tab-button-color: var(--color);
	--tab-button-border-width: var(--border-width);
}
`;

template.innerHTML = `
<style>${style}</style>
<slot></slot>
`;

class CoolTab extends HTMLElement {
	constructor() {
		super();

		this._value = undefined;
	}

	connectedCallback() {
		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.appendChild(template.content.cloneNode(true));

		this.addEventListener('tabselect', (event) => this.value = event.target.value);

		setTimeout(() => this.updateTabs());
	}

	static get observedAttributes() {
		return ['value'];
	}

	attributeChangedCallback(attrName, oldValue, newValue) {
		if (oldValue === newValue) {
			return;
		}

		this[attrName] = newValue;
	}

	get value() {
		return this._value;
	}

	set value(newValue) {
		if (newValue === this.value) {
			return;
		}

		this._value = newValue;
		this.updateTabs();
		this.dispatchEvent(new CustomEvent('tabchange', { bubbles: true }));
		this.setAttribute('value', this.value);
	}

	updateTabs() {
		this.tabButtons
		.forEach((tab) => tab.selected = (tab.value === this.value));
	}

	get tabButtons() {
		return Array.from(this.querySelectorAll('cool-tab-button'));
	}
}

window.customElements.define('cool-tab', CoolTab);
