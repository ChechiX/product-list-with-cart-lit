import { LitElement, html, css, unsafeCSS } from 'lit';
import styles from './cart-panel.scss?inline';
import { resetStyles } from '../styles/reset.styles';
import emptyCartIllustration from '../assets/icons/illustration-empty-cart.svg';

export class CartPanel extends LitElement {
  static styles = [resetStyles, unsafeCSS(styles)];

  render() {
    return html`<div class="cart-panel">
      <h3 class="cart-panel__heading">Your Cart (0)</h3>

      <div class="cart-panel__empty">
        <img src="${emptyCartIllustration}" alt="Empty cart" />

        <p class="cart-panel__empty-text">Your added items will appear here</p>
      </div>
    </div>`;
  }
}

window.customElements.define('cart-panel', CartPanel);
