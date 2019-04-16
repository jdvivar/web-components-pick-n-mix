import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";

const tag = "polymer3-wc";

class Polymer3WC extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host .wrapper {
          border: var(--wc-border);
          border-color: pink;
          padding: var(--wc-padding);
          margin: var(--wc-margin);
        }
      </style>
      <div class="wrapper">
        <h4>Polymer 3 Web Component</h4>
        <p><slot></slot></p>
      </div>
    `;
  }
}

customElements.define(tag, Polymer3WC);
