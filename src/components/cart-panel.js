import { LitElement, html, css } from 'lit';

import emptyCartIllustration from '../assets/icons/illustration-empty-cart.svg';

import { resetStyles } from '../styles/reset.styles';

export class CartPanel extends LitElement {
  render() {
    return html`<div class="cart-panel">
      <h3 class="cart-panel__heading">Your Cart (0)</h3>

      <div class="cart-panel__empty">
        <img src="${emptyCartIllustration}" alt="Empty cart" />

        <p class="cart-panel__empty-text">Your added items will appear here</p>
      </div>
    </div>`;
  }

  static get styles() {
    return [
      resetStyles,
      css`
        :host {
          display: block;
        }

        .cart-panel {
          background-color: var(--white);
          padding: 1.5rem;
          border-radius: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .cart-panel__heading {
          color: var(--red);
          font-size: 1.5rem;
          font-weight: 700;
        }

        .cart-panel__empty {
          padding: 1rem 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .cart-panel__empty-text {
          color: var(--rose-500);
          font-size: 0.875rem;
          font-weight: 600;
        }
      `,
    ];
  }
}

window.customElements.define('cart-panel', CartPanel);
