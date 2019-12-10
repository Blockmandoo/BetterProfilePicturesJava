//Small JS file to define custom elements (I don't entirely understand it)
//Author: Nathanael Jacobsma

try {
	class imageCard extends HTMLElement {}
	class toggleswitch extends HTMLElement {}
	class togglePeg extends HTMLElement {}
	class toolTip extends HTMLElement {}
	var customElementRegistry = window.customElements;
	customElementRegistry.define("image-card", imageCard);
	customElementRegistry.define("toggle-switch", toggleswitch);
	customElementRegistry.define("toggle-peg", togglePeg);
	customElementRegistry.define("tool-tip", toolTip);
} catch (error) {
	console.log("Custom elements not supported.");
}
