import ProductDetail from './ProdudctDetail.js';

export default function ProductDetailPage({ $target, productId }) {
  this.state = {
    productId,
    product: null
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
  const $page = document.createElement('div');
  $page.className = 'ProductDetailPage';

  $page.innerHTML = '<h1>상품 정보</h1>';

  this.render = () => {
    if (!this.state.product) {
      $target.innerHTML = 'Loading..';
    } else {
      $target.innerHTML = '';
      $target.appendChild($page);
      // ProductDetail 렌더링하기
      new ProductDetail({
        $target: $page,
        initialState: {
          product: this.state.product,
          // ProductDetail의 initialState에 선택된 상품들을 담아둘 selectedOptions 추가
          selectedOptions: []
        }
      });
    }
  };

  this.fetchProduct = async () => {
    const { productId } = this.state;
    // const product = await request(`/products/${productId}`)
    const product = {
      id: 4,
      name: '우유 거품기',
      price: 20000,
      imageUrl:
        'https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cooking_milk_foamer.png',
      productOptions: [
        {
          id: 7,
          name: '기품기 본품',
          price: 0,
          stock: 10,
          created_at: '2021-08-23T22:54:00.263Z',
          updated_at: '2021-08-23T22:54:00.267Z'
        },
        {
          id: 8,
          name: '스페셜 거품기',
          price: 10000,
          stock: 0,
          created_at: '2021-08-23T22:54:16.572Z',
          updated_at: '2021-08-23T22:54:16.577Z'
        },
        {
          id: 9,
          name: '거품기 + 세척기 세트',
          price: 20000,
          stock: 1,
          created_at: '2021-08-23T22:54:30.134Z',
          updated_at: '2021-08-23T22:54:30.138Z'
        }
      ]
    };
    this.setState({
      ...this.state,
      product
    });
  };
  this.fetchProduct();
}
