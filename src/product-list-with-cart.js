import { LitElement, html, css } from 'lit';

import './components/product-list';

import { resetStyles } from './styles/reset.styles';

export class ProductListWithCart extends LitElement {
  render() {
    return html`<main class="product-list-with-cart">
      <h1 class="product-list-with-cart__heading">Desserts</h1>
      <product-list></product-list>
    </main>`;
  }

  static get styles() {
    return [
      resetStyles,
      css`
        :host {
          display: block;
        }

        .product-list-with-cart {
        }

        .product-list-with-cart__heading {
          color: var(--rose-900);
        }
      `,
    ];
  }
}

window.customElements.define('product-list-with-cart', ProductListWithCart);
