const tag = "vanilla-wc";

const template = document.createElement("template");
template.innerHTML = `
<style>
  :host .wrapper {
    border: var(--wc-border);
    border-color: yellow;
    padding: var(--wc-padding);
    margin: var(--wc-margin);
  }
</style>
<div class=wrapper>
  <h4>Vanilla Web Component</h4>
  <p><slot></slot></p>
</div>
`;

class VanillaWC extends HTMLElement {
  connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
}

// const register = () => customElements.define(tag, VanillaWC);
// window.WebComponents ? window.WebComponents.waitFor(register) : register();
customElements.define(tag, VanillaWC);
