import { LitElement, html, unsafeCSS } from 'lit';
import { ContextConsumer } from '@lit/context';
import { cartContext } from '../context/cart.context';
import addToCartIcon from '../assets/icons/icon-add-to-cart.svg';
import decrementQuantityIcon from '../assets/icons/icon-decrement-quantity.svg';
import incrementQuantityIcon from '../assets/icons/icon-increment-quantity.svg';
import styles from './product-item.scss?inline';
import { resetStyles } from '../styles/reset.styles';

export class ProductItem extends LitElement {
  static styles = [resetStyles, unsafeCSS(styles)];

  _consumer = new ContextConsumer(this, {
    context: cartContext,
    subscribe: true,
  });

  static get properties() {
    return {
      product: { type: Object },
    };
  }

  render() {
    const quantity = this._getProductQuantity();

    return html`<li class="product-item">
      <picture>
        <source
          media="(min-width: 64rem)"
          srcset="${this.product.image.desktop}"
        />

        <source
          media="(min-width: 48rem)"
          srcset="${this.product.image.tablet}"
        />

        <img
          class="product-item__image ${quantity > 0
            ? 'product-item__image--active'
            : ''}"
          srcset="${this.product.image.mobile}"
          alt="${this.product.name}"
        />
      </picture>

      ${quantity > 0
        ? html`<div class="product-item__quantity-control">
            <button
              class="product-item__quantity-button"
              @click=${this._handleDecrementQuantity}
              aria-label="Decrease quantity"
            >
              <img src=${decrementQuantityIcon} alt="" aria-hidden="true" />
            </button>

            <p class="product-item__quantity-value">${quantity}</p>

            <button
              class="product-item__quantity-button"
              @click=${this._handleAddToCart}
              aria-label="Increase quantity"
            >
              <img src=${incrementQuantityIcon} alt="" aria-hidden="true" />
            </button>
          </div>`
        : html`<button
            class="product-item__add-to-cart"
            @click=${this._handleAddToCart}
          >
            <img src=${addToCartIcon} alt="Add to Cart" />Add to Cart
          </button>`}

      <div class="product-item__info">
        <h2 class="product-item__category">${this.product.category}</h2>

        <p class="product-item__name">${this.product.name}</p>

        <p class="product-item__price">$${this.product.price.toFixed(2)}</p>
      </div>
    </li>`;
  }

  _handleAddToCart() {
    this.dispatchEvent(
      new CustomEvent('add-to-cart', {
        detail: this.product,
        bubbles: true,
        composed: true,
      }),
    );
  }

  _handleDecrementQuantity() {
    this.dispatchEvent(
      new CustomEvent('decrement-cart-item', {
        detail: this.product,
        bubbles: true,
        composed: true,
      }),
    );
  }

  _getProductQuantity() {
    const items = this._consumer.value?.items ?? [];

    const matchingItem = items.find(
      (item) => item.product.name === this.product.name,
    );

    return matchingItem?.quantity ?? 0;
  }
}

window.customElements.define('product-item', ProductItem);
