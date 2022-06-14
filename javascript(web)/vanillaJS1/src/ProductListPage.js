import { request } from './api.js';
import ProductList from './ProductList.js';

function ProductListPage({ $target }) {
  this.state = {};
  const $page = document.createElement('div');
  $page.className = 'ProductListPage';
  $page.innerHTML = `<h1>상품 목록</h1>`;

  this.setState = (nextState) => {
    this.state = nextState;
  };

  const fetchProducts = async () => {
    const products = await request('/products');
    this.setState(products);
  };
  fetchProducts();

  const productList = new ProductList({
    $target: $page,
    iniitalState: this.state
  });

  this.render = () => {
    $target.appendChild($page);
  };
}

export default ProductListPage;
