import { LitElement, html, css } from 'lit';

import { resetStyles } from '../styles/reset.styles';

export class ProductItem extends LitElement {
  static get properties() {
    return {
      product: { type: Object },
    };
  }

  render() {
    return html`<li class="product-item">
      <img />

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
