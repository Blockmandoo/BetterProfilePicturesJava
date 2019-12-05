//Small JS file to define custom elements (I don't entirely understand it)
//Author: Nathanael Jacobsma

try {
  class toolTip extends HTMLElement {}
  class imageCard extends HTMLElement {}
  var customElementRegistry = window.customElements;
  customElementRegistry.define("tool-tip", toolTip);
  customElementRegistry.define("image-card", imageCard);
} catch (error) {
  console.log("Custom elements not supported.");
}
