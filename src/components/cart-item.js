import { LitElement, html, unsafeCSS } from 'lit';
import styles from './cart-item.scss?inline';
import { resetStyles } from '../styles/reset.styles';
import removeItemIcon from '../assets/icons/icon-remove-item.svg';

export class CartItem extends LitElement {
  static styles = [resetStyles, unsafeCSS(styles)];

  static properties = {
    item: { type: Object },
  };

  get totalPrice() {
    return this.item.price;
  }

  render() {
    return html`<li class="cart-item">
        <div class="cart-item__info">
          <p>${this.item.name}</p>

          <div class="cart-item__quantity">
            <p>1x</p>

            <p>@ $${this.item.price.toFixed(2)}</p>

            <p>$${this.totalPrice.toFixed(2)}</p>
          </div>
        </div>

        <button class="cart-item__remove">
          <img src="${removeItemIcon}" alt="Remove item" />
        </button>
      </li>

      <hr /> `;
  }
}

customElements.define('cart-item', CartItem);
