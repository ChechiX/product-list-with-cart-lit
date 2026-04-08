import { LitElement, html, css } from 'lit';

import addToCartIcon from '../assets/icons/icon-add-to-cart.svg';

import { resetStyles } from '../styles/reset.styles';

export class ProductItem extends LitElement {
  static get properties() {
    return {
      product: { type: Object },
    };
  }

  render() {
    return html`<li class="product-item">
      <picture>
        <source
          media="(min-width: 90rem)"
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

      <button class="product-item__add-to-cart">
        <img src=${addToCartIcon} alt="Add to Cart" />Add to Cart
      </button>

      <div class="product-item__info">
        <h2>${this.product.category}</h2>

        <p>${this.product.name}</p>

        <p>$${this.product.price.toFixed(2)}</p>
      </div>
    </li>`;
  }

  static get styles() {
    return [
      resetStyles,
      css`
        :host {
          display: block;
        }

        .product-item {
          display: grid;
        }

        .product-item__image {
          border-radius: 0.5rem;
        }

        .product-item__add-to-cart {
          background-color: var(--white);
          border: 1px solid var(--rose-400);
          padding: 0.75rem;
          border-radius: 999px;
          display: flex;
          gap: 0.5rem;
          align-items: center;
          justify-self: center;
        }

        .product-item__info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
      `,
    ];
  }
}

window.customElements.define('product-item', ProductItem);
