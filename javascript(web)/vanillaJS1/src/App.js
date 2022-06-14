import ProductListPage from './ProductListPage.js';
import ProductDetailPage from './ProductDetailPage.js';
import CartPage from './CartPage.js';

export default function App({ $target }) {
  this.route = () => {
    const { pathname } = location;

    $target.innerHTML = '';

    if (pathname === '/') {
      new ProductListPage({ $target }).render();
    } else if (pathname.indexOf('/products/') === 0) {
      const [, , productId] = pathname.split('/');
      new ProductDetailPage({
        $target,
        productId
      }).render();
    } else if (pathname === '/cart') {
      new CartPage({
        $target
      }).render();
    }
  };

  this.route();
}
