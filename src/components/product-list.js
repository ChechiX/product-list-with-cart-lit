import { LitElement, html, css } from 'lit';
import { Task } from '@lit/task';

import './product-item';

import { resetStyles } from '../styles/reset.styles';

export class ProductList extends LitElement {
  _productsTask = new Task(this, {
    task: async () => {
      const response = await fetch('/data.json');

      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    },
    args: () => [],
  });

  render() {
    return this._productsTask.render({
      pending: () => html`<p>Loading...</p>`,
      complete: (products) =>
        html`<ul class="product-list">
          ${products.map(
            (product) =>
              html`<product-item .product=${product}></product-item>`,
          )}
        </ul>`,
      error: (error) => html`<p>Error: ${error.message}</p>`,
    });
  }

  static get styles() {
    return [
      resetStyles,
      css`
        :host {
          display: block;
        }

        .product-list {
          display: grid;
          gap: 1.5rem;

          @media (min-width: 48rem) {
            grid-template-columns: repeat(3, 1fr);
            row-gap: 2rem;
          }
        }
      `,
    ];
  }
}

window.customElements.define('product-list', ProductList);
