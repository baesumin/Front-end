// const API_END_POINT = 'https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com/dev';
// const API_END_POINT = 'API_END_POINT';
// 상품 목록 조회
// GET - https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com/dev/products
// 상품 옵션 및 수량 조회
// GET - https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com/dev/products/{productId}
export const request = async (url, options = {}) => {
  try {
    const fullUrl = `https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com/dev${url}`;
    const response = await fetch(fullUrl, options);

    if (response.ok) {
      const json = await response.json();
      return json;
    }
    throw new Error('API 통신 실패');
  } catch (e) {
    alert(e.message);
  }
};
