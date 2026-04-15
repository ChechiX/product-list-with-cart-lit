import { LitElement, html, css } from 'lit';

import './components/product-list';
import './components/cart-panel';

import { resetStyles } from './styles/reset.styles';

export class ProductListWithCart extends LitElement {
  render() {
    return html`<main class="product-list-with-cart">
      <div class="product-list-with-cart__products">
        <h1 class="product-list-with-cart__heading">Desserts</h1>

        <product-list></product-list>
      </div>

      <cart-panel></cart-panel>
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
          display: grid;
          place-self: center;
          gap: 2rem;
          max-width: 76rem;

          @media (min-width: 64rem) {
            grid-template-columns: 50rem 24rem;
          }
        }

        .product-list-with-cart__products {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .product-list-with-cart__heading {
          color: var(--rose-900);
          font-size: 2.5rem;
          line-height: 1.2;
          font-weight: 700;
        }
      `,
    ];
  }
}

window.customElements.define('product-list-with-cart', ProductListWithCart);
