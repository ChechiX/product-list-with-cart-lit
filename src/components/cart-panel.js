import { LitElement, html, css } from 'lit';

export class CartPanel extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html`<div class="cart-panel">
      <h2>Shopping Cart</h2>
      <p>Your cart is empty.</p>
    </div>`;
  }
}
customElements.define('cart-panel', CartPanel);
