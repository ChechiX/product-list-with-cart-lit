import { LitElement, html, unsafeCSS } from 'lit';
import { ContextProvider } from '@lit/context';
import { cartContext } from './context/cart.context';
import './components/product-list';
import './components/cart-panel';
import styles from './product-list-with-cart.scss?inline';
import { resetStyles } from './styles/reset.styles';

export class ProductListWithCart extends LitElement {
  static styles = [resetStyles, unsafeCSS(styles)];

  constructor() {
    super();

    this.cart = { items: [], totalItems: 0, totalPrice: 0 };

    this._provider = new ContextProvider(this, {
      context: cartContext,
      initialValue: this.cart,
    });
  }

  render() {
    return html`<main
      class="product-list-with-cart"
      @add-to-cart=${this._handleAddToCart}
    >
      <div class="product-list-with-cart__products">
        <h1 class="product-list-with-cart__heading">Desserts</h1>

        <product-list></product-list>
      </div>

      <cart-panel></cart-panel>
    </main>`;
  }

  _handleAddToCart(event) {
    const product = event.detail;

    const nextCart = {
      items: [...this.cart.items, product],
      totalItems: this.cart.totalItems + 1,
      totalPrice: this.cart.totalPrice + product.price,
    };

    this.cart = nextCart;

    this._provider.setValue(nextCart);
  }
}

window.customElements.define('product-list-with-cart', ProductListWithCart);
