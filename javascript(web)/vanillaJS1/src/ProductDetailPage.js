export default function ProductDetailPage({ $target, productId }) {
  this.state = {
    productId
  };
  const $page = document.createElement('div');
  $page.className = 'ProductDetailPage';

  $page.innerHTML = '<h1>상품 정보</h1>';

  this.render = () => {
    $target.appendChild($page);
  };
}
