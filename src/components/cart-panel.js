import { LitElement, html, css, unsafeCSS } from 'lit';
import { ContextConsumer } from '@lit/context';
import { cartContext } from '../context/cart.context';
import './cart-item';
import styles from './cart-panel.scss?inline';
import { resetStyles } from '../styles/reset.styles';
import emptyCartIllustration from '../assets/icons/illustration-empty-cart.svg';
import carbonNeutralIcon from '../assets/icons/icon-carbon-neutral.svg';

export class CartPanel extends LitElement {
  static styles = [resetStyles, unsafeCSS(styles)];

  _consumer = new ContextConsumer(this, {
    context: cartContext,
    subscribe: true,
  });

  get quantity() {
    if (!this._consumer.value) return 0;
    console.log(this._consumer.value.items);
    return this._consumer.value.totalItems;
  }

  get items() {
    if (!this._consumer.value) return [];
    return this._consumer.value.items;
  }

  get totalPrice() {
    if (!this._consumer.value) return 0;
    return this._consumer.value.totalPrice;
  }

  render() {
    if (this.quantity > 0) {
      return html`<div class="cart-panel">
        <h3 class="cart-panel__heading">Your Cart (${this.quantity})</h3>

        <ul class="cart-panel__items">
          ${this.items.map(
            (item) => html`<cart-item .item="${item}"></cart-item>`,
          )}
        </ul>

        <hr />

        <p class="cart-panel__total">
          Order Total
          <strong class="cart-panel__total-amount"
            >$${this.totalPrice.toFixed(2)}</strong
          >
        </p>

        <div class="cart-panel__description">
          <img src="${carbonNeutralIcon}" alt="Carbon neutral icon" />

          <p>This is a <strong>carbon-neutral</strong> delivery</p>
        </div>

        <button class="cart-panel__confirm">Confirm Order</button>
      </div>`;
    } else {
      return html`<div class="cart-panel">
        <h3 class="cart-panel__heading">Your Cart (${this.quantity})</h3>

        <div class="cart-panel__empty">
          <img src="${emptyCartIllustration}" alt="Empty cart" />

          <p class="cart-panel__empty-text">
            Your added items will appear here
          </p>
        </div>
      </div>`;
    }
  }
}

window.customElements.define('cart-panel', CartPanel);
