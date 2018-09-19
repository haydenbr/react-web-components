const styles = `
p {
	color: #f8981c;
}
`;

const template = `
<style>${styles}</style>
<p>Bob is cool!!!</p>
`;

class BobIsCool extends HTMLElement {}

window.customElements.define('bob-is-cool', BobIsCool);
