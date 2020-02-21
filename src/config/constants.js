const DEVICE_WIDTH_RANGE = {
  DESKTOP_MAX: 1440,
  DESKTOP_MIN: 1025,
  PAD_MIN: 768,
  PAD_MAX: 1024,
  PHONE_MAX: 767
};

export const PAYMENT_STATUS = {
  NOT_PAID: '1',
  PARTIALLY_PAID: '2',
  FULLY_PAID: '3',
  OVER_PAID: '4'
};

export const REG = {
  PHONE: /^((17[0-9])|(14[0-9])|(13[0-9])|(15[0-9])|(18[0-9])|(19[7])|(19[9]))\d{8}$/,
  // 简单验证手机号
  SIMPLE_PHONE: /^[1][3,4,5,7,8,9][0-9]{9}$/,
  // 个人信息里的手机号验证要和后端一致，没有199
  PHONE_PERSONAL: /^((17[0-9])|(14[0-9])|(13[0-9])|(15[0-9])|(18[0-9])|(19[7]))\d{8}$/,
  // EMAIL: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,  // 邮箱地址
  EMAIL: /(^[A-Za-z0-9]+([._\\-]*[A-Za-z0-9])*@([A-Za-z0-9]+[-A-Za-z0-9]*[A-Za-z0-9]+.){1,63}[A-Za-z0-9]+$)|(^$)/,  // 邮箱地址
  PSW: /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,  // 密码格式
  EN: /^[A-Za-z]+$/ // 大写字母+小写字母
};

export const ORDER_PAYMENT_STATUS_MAP = {
  [PAYMENT_STATUS.NOT_PAID]: '订单未支付',
  [PAYMENT_STATUS.PARTIALLY_PAID]: '订单部分支付成功',
  [PAYMENT_STATUS.FULLY_PAID]: '支付成功',
  [PAYMENT_STATUS.OVER_PAID]: '订单支付成功(超额)'
};

export function isMobile() {
  return window.innerWidth <= DEVICE_WIDTH_RANGE.PHONE_MAX;
}

export function isDesktop() {
  return window.innerWidth >= DEVICE_WIDTH_RANGE.DESKTOP_MIN;
}

export function isTablet() {
  return window.innerWidth >= DEVICE_WIDTH_RANGE.PAD_MIN && window.innerWidth <= DEVICE_WIDTH_RANGE.PAD_MAX;
}

export const LANGUAGE_EN = 'en';

// 英文网站 请求 渠道
export const ENGLISH_MARKET_CHANNEL = 40;

// 优惠活动渠道为官网
export const MARKET_CHANNEL_PC = 26;

// 微信小程序环境
export const IS_WECHAT_MINI = 'isWechatMini';

export const genderArray = [{ key: '1', value: '男' }, { key: '0', value: '女' }];

export const MY_CART = 'myCart';

