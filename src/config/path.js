/* eslint-disable no-undef */
// const cfg = config;
// helper
function applyPrefix(prefix, obj) {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    newObj[key] = `${prefix}${obj[key]}`;
  });
  return newObj;
}
export const commonPath = {
  // IMG_CND_URL: 'http://134.175.218.206/images/'
  IMG_CND_URL: 'http://localhost:8081/images/'
};

const apiPathObj = {
  INDEX_BANNER_LIST: 'link/getLinkList',
  GET_ARTICLE_LIST: 'article/getArticleList',
  GET_PRODUCT_LIST: 'product/getProductList',
  GET_PRODUCT_DESC: 'product/getProductDesc',
  ADD_CART: 'product/addCard'
};

export const apiPath = applyPrefix('http://localhost:8000/api/', apiPathObj);

