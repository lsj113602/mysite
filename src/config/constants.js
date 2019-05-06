const DEVICE_WIDTH_RANGE = {
  DESKTOP_MAX: 1440,
  DESKTOP_MIN: 1025,
  PAD_MIN: 768,
  PAD_MAX: 1024,
  PHONE_MAX: 767,
};

export const PAYMENT_STATUS = {
  NOT_PAID: '1',
  PARTIALLY_PAID: '2',
  FULLY_PAID: '3',
  OVER_PAID: '4',
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
  EN: /^[A-Za-z]+$/, // 大写字母+小写字母
};

export const ORDER_PAYMENT_STATUS_MAP = {
  [PAYMENT_STATUS.NOT_PAID]: '订单未支付',
  [PAYMENT_STATUS.PARTIALLY_PAID]: '订单部分支付成功',
  [PAYMENT_STATUS.FULLY_PAID]: '支付成功',
  [PAYMENT_STATUS.OVER_PAID]: '订单支付成功(超额)',
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

// COMPILE TIME CONFIG

export const NODE_ENV_PROD = 'production';
export const NODE_ENV_DEV = 'development';

/**
 * =======================
 * MEDIA QUERY
 * ========================
 */

export const MEDIAQ_MAX = `@media only screen and (min-width: ${DEVICE_WIDTH_RANGE.DESKTOP_MAX}px)`;
export const MEDIAQ_DESKTOP = `@media only screen and (min-width: ${DEVICE_WIDTH_RANGE.DESKTOP_MIN}px) and (max-width: ${DEVICE_WIDTH_RANGE.DESKTOP_MAX}px)`;
export const MEDIAQ_PAD = `@media only screen and (min-width: ${DEVICE_WIDTH_RANGE.PAD_MIN}px) and (max-width: ${DEVICE_WIDTH_RANGE.PAD_MAX}px)`;
export const MEDIAQ_PHONE = `@media only screen and (max-width: ${DEVICE_WIDTH_RANGE.PHONE_MAX}px)`;

export const MEDIAQ_NOT_PHONE = `@media only screen and (min-width: ${DEVICE_WIDTH_RANGE.PAD_MIN}px)`;
export const MEDIAQ_PC = `@media only screen and (min-width: ${DEVICE_WIDTH_RANGE.DESKTOP_MIN}px)`;
export const MEDIAQ_NOT_PC_AND_MAX = `@media only screen and (max-width: ${DEVICE_WIDTH_RANGE.DESKTOP_MIN}px)`;

export const TOKEN = 'GK_TOKEN_CUST';

export const documentMap = { 1: '身份证', 2: '护照', 7: '港澳通行证', 11: '台湾通行证', 12: '其他' };
// export const documentMap = { 1: '身份证', 2: '护照', 3: '军人证', 4: '户口本', 5: '警官证', 6: '士兵证', 7: '港澳通行证', 8: '台胞证', 9: '回乡证', 10: '大陆通行证(国内航线)', 11: '大陆居民往来台湾通行证' };

export const CUSTOMER_SERVICE_PHONE = '400-100-6262';
export const CUSTOMER_SERVICE_PHONE_FOREIGN = '+86-21-23300602';

export const PHONE_MAX_CLIENT_WIDTH = 767;

export const ALIYUN_APP_KEY = 'FFFF00000000017BA44F';
export const SCENE = 'nc_other';

export const RECAPTCHA_SITE_KEY = '6LenLFgUAAAAAE6mjC8AhxWT3ScZMAjoJWzGrpL2';
export const RECAPTCHA_API = 'https://www.recaptcha.net/recaptcha/api.js';

export const WECHAT_BROWSER_CODE = { platform: 1, scope: 2 };
export const PC_BROWSER_CODE = { platform: 2, scope: 3 };
export const MOBILE_BROWSER_CODE = { platform: 2, scope: 3 };
export const ACC_BIND_WECHAT_BROWSER_CODE = { platform: 9, scope: 2 };

export const LANGUAGE_EN = 'en';

// 英文网站 请求 渠道
export const ENGLISH_MARKET_CHANNEL = 40;

// 优惠活动渠道为官网
export const MARKET_CHANNEL_PC = 26;

// 微信小程序环境
export const IS_WECHAT_MINI = 'isWechatMini';

// 拼团渠道
export const PINTUAN_MARKET_CHANNEL = 60;

// /*
//  ** 4-婴儿：0周岁以下(含)
//  * 2-儿童：1-11周岁(含)
//  * 1-成人： 12-80周岁(含)
//  * 8-老人：80岁以上
// */
export const ELDER_TYPE = 8;
export const ADULT_TYPE = 1;
export const CHILD_TYPE = 2;
export const BABY_TYPE = 4;

export const mapAgeType = {
  [ELDER_TYPE]: '老人',
  [ADULT_TYPE]: '成人',
  [CHILD_TYPE]: '儿童',
  [BABY_TYPE]: '婴儿',
};

export const genderArray = [{ key: '1', value: '男' }, { key: '0', value: '女' }];

// silk 图片压缩
// 120 PX
// 325 PX
// 380 PX
// 420 PX
// 660 PX
// 900 PX

// banner, 行程
export const BANNER_IMG_SIZE_PC = '.900x400.jpg';
export const BANNER_IMG_SIZE_MOBILE = '.660x320.jpg';
// 产品卡片,酒店图片，小卡片size,
export const CARD_IMG_SIZE = '.660x480.jpg'; // 1.5倍
export const SMALL_CARD_IMG_SIZE = '.240x208.jpg'; // 2倍
// 长图文
export const LONG_IMG_SIZE_PC = '.1000x30000.jpg';
export const LONG_IMG_SIZE_MOBILE = '.660x20000.jpg';

// 抽奖活动
export const LUCKY_DRAW_ACTIVITY = 'sunwing';
