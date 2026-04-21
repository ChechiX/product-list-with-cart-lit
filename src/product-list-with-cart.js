import { LitElement, html, unsafeCSS } from 'lit';
import { ContextProvider } from '@lit/context';
import './components/product-list';
import './components/cart-panel';
import styles from './product-list-with-cart.scss?inline';
import { resetStyles } from './styles/reset.styles';
import { cartContext } from './context/cart.context';

export class ProductListWithCart extends LitElement {
  static styles = [resetStyles, unsafeCSS(styles)];

  static properties = {};

  constructor() {
    super();

    this._provider = new ContextProvider(this, { context: cartContext });
  }

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
