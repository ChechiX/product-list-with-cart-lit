import { LitElement, html, unsafeCSS } from 'lit';
import styles from './cart-item.scss?inline';
import { resetStyles } from '../styles/reset.styles';

export class CartItem extends LitElement {
  static styles = [resetStyles, unsafeCSS(styles)];

  render() {
    return html`<div></div>`;
  }
}

customElements.define('cart-item', CartItem);
