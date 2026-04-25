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
    return this.item.product.price * this.item.quantity;
  }

  render() {
    return html`<li class="cart-item">
        <div class="cart-item__info">
          <p class="cart-item__info-name">${this.item.product.name}</p>

          <div class="cart-item__quantity">
            <p class="cart-item__quantity-amount">${this.item.quantity}x</p>

            <p class="cart-item__quantity-price">
              @ $${this.item.product.price.toFixed(2)}
            </p>

            <p class="cart-item__total-price">$${this.totalPrice.toFixed(2)}</p>
          </div>
        </div>

        <button class="cart-item__remove" @click=${this._handleRemoveItem}>
          <img src="${removeItemIcon}" alt="Remove item" />
        </button>
      </li>

      <hr /> `;
  }

  _handleRemoveItem() {
    this.dispatchEvent(
      new CustomEvent('remove-cart-item', {
        detail: this.item.product,
        bubbles: true,
        composed: true,
      }),
    );
  }
}

customElements.define('cart-item', CartItem);
