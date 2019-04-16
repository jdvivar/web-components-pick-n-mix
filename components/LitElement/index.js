import { LitElement, html, css } from "lit-element";

export class LitWC extends LitElement {
  static get styles() {
    return css`
      .wrapper {
        border: var(--wc-border);
        border-color: blue;
        padding: var(--wc-padding);
        margin: var(--wc-margin);
      }
    `;
  }

  render() {
    return html`
      <div class="wrapper">
        <h4>LitElement Web Component</h4>
        <p><slot></slot></p>
      </div>
    `;
  }
}

customElements.define("lit-wc", LitWC);
