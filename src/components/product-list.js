import { LitElement, html, css, unsafeCSS } from 'lit';
import { Task } from '@lit/task';
import './product-item';
import styles from './product-list.scss?inline';
import { resetStyles } from '../styles/reset.styles';

export class ProductList extends LitElement {
  static styles = [resetStyles, unsafeCSS(styles)];

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
}

window.customElements.define('product-list', ProductList);
