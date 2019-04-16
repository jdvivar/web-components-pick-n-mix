import { LitElement, html, css, customElement } from "lit-element";

@customElement("lit-wc")
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
