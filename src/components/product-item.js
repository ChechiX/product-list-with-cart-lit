import { LitElement, html, css, unsafeCSS } from 'lit';
import addToCartIcon from '../assets/icons/icon-add-to-cart.svg';
import styles from './product-item.scss?inline';
import { resetStyles } from '../styles/reset.styles';

export class ProductItem extends LitElement {
  static styles = [resetStyles, unsafeCSS(styles)];

  static get properties() {
    return {
      product: { type: Object },
    };
  }

  render() {
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
          class="product-item__image"
          srcset="${this.product.image.mobile}"
          alt="${this.product.name}"
        />
      </picture>

      <button class="product-item__add-to-cart" @click=${this._handleAddToCart}>
        <img src=${addToCartIcon} alt="Add to Cart" />Add to Cart
      </button>

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
}

window.customElements.define('product-item', ProductItem);
