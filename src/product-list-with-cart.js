import { LitElement, html, unsafeCSS } from 'lit';
import './components/product-list';
import './components/cart-panel';
import styles from './product-list-with-cart.scss?inline';
import { resetStyles } from './styles/reset.styles';

export class ProductListWithCart extends LitElement {
  static styles = [resetStyles, unsafeCSS(styles)];

  render() {
    return html`<main class="product-list-with-cart">
      <div class="product-list-with-cart__products">
        <h1 class="product-list-with-cart__heading">Desserts</h1>

        <product-list></product-list>
      </div>

      <cart-panel></cart-panel>
    </main>`;
  }
}

window.customElements.define('product-list-with-cart', ProductListWithCart);
