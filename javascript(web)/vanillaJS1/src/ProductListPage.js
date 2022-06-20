import { request } from './api.js';
import ProductList from './ProductList.js';
import { routeChange } from './router.js';

function ProductListPage({ $target }) {
  this.state = {};
  const $page = document.createElement('div');
  $page.className = 'ProductListPage';
  $page.innerHTML = `<h1>상품 목록</h1>`;

  this.setState = (nextState) => {
    this.state = nextState;
  };

  const fetchProducts = async () => {
    // const products = await request('/products');
    this.setState(products);
  };
  fetchProducts();

  const productList = new ProductList({
    $target: $page,
    iniitalState: this.state
  }).render();

  $page.addEventListener('click', (e) => {
    console.log(e);
    const $li = e.target.closest('li');
    const { productId } = $li.dataset;

    if (productId) {
      routeChange(`/products/${productId}`);
    }
  });

  this.render = () => {
    $target.appendChild($page);
    $page.innerHTML = `
      <ul>
        ${this.state
          .map((product) => {
            return `
              <li class="Product" data-product-id=${product.id}>
                <a href="/products/${product.id}">
                  <img src="${product.imageUrl}"/>
                  <div class="Product__info">
                    <div>${product.name}</div>
                    <div>${product.price.toLocaleString()}원~</div>
                  </div>
                </a>
              </li>
          `;
          })
          .join('')}
      </ul>
    `;
  };
}

export default ProductListPage;

const products = [
  {
    id: 1,
    name: '커피 컵',
    imageUrl:
      'https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png',
    price: 10000
  },
  {
    id: 2,
    name: '커피컵 종이홀더',
    imageUrl:
      'https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/coffee_cup_paper_sleeve.png',
    price: 1000
  },
  {
    id: 3,
    name: '커피 머신',
    imageUrl:
      'https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/coffee_self_service.png',
    price: 500000
  },
  {
    id: 4,
    name: '우유 거품기',
    imageUrl:
      'https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cooking_milk_foamer.png',
    price: 20000
  },
  {
    id: 5,
    name: '우유용 컵',
    imageUrl:
      'https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/drink_cafe_milk_jag.png',
    price: 10000
  },
  {
    id: 6,
    name: '그렙 커피',
    imageUrl:
      'https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/drink_petbottle_coffee.png',
    price: 3000
  },
  {
    id: 7,
    name: '에스프레소 메이커',
    imageUrl:
      'https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/espresso_maker.png',
    price: 50000
  },
  {
    id: 8,
    name: '냉동 샌드위치',
    imageUrl:
      'https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/food_sandwitch.png',
    price: 10000
  },
  {
    id: 9,
    name: '티 메이커',
    imageUrl:
      'https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/press_tea_maker.png',
    price: 35000
  },
  {
    id: 10,
    name: '각설탕 묶음',
    imageUrl:
      'https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/sugar_kakuzatou.png',
    price: 500
  },
  {
    id: 11,
    name: '커피 시럽',
    imageUrl:
      'https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/sweets_milk_cream.png',
    price: 500
  },
  {
    id: 12,
    name: '에스프레소 머신',
    imageUrl:
      'https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/espresso_maker_2.png',
    price: 300000
  }
];
