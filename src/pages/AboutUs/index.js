import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import './aboutUs.scss';
import Header from '../../components/util/Header';
import Bottom from '../../components/util/Bottom';
import { selectCartList } from '../../store/product/selector';



const AboutUs = (props) => {
  // 你可以在这使用 Hook
  console.log(props);
  return (
    <div className="about">
      <Header title="关于我们"/>
      <div className="about__content">
        <div className="about__title">
          关于宸曦极光
          <p className="about__p">联系电话：
            <a className="about__a"
                href="tel:158888888888"
            >158888888888</a></p>
          <p className="about__p">联系地址：广东省广东市人民路人民街道</p>
          <p className="about__p">
            邮箱：
            <a className="about__a"
                href="mailto:8888@qq.com"
            >8888@qq.com</a>
          </p>
        </div>
        <div className="about-text">
          <div className="about-text__title">
            一、公司简介
          </div>
          <div className="about-text__content">
            <span className="about-span">宸曦极光是一家集商城导航、媒体、社区属性为一体的消费领域门户型网站。</span>
            <span className="about-span">宸曦极光——厂家商城导航网站，为用户提供“正品、便捷、实惠”搜索体验，通过会员社区互动，消费者参与建站，打造最全面、权威、专业的厂商资讯服务平台及中国最大的F2C平台。</span>
            <span className="about-span">宸曦极光颠覆传统企业的销售方式，也将改变人们生活消费方式——来宸曦极光，去厂 家购物。杜绝假货、便捷快速的搜索体验以及理性购物的思维，将成为宸曦极光新一批用户的重要特征。</span>
          </div>
          <div className="about-text__title">
            二、网站版块介绍
          </div>
          <div className="about-text__content">
            <span className="about-span">网站提供丰富优质的品牌厂家直销官网的商城导航，品类包括：汽车用品、家装家居、 家用电器、3C数码、服饰鞋帽、母婴用品、运动健康、箱包礼品、珠宝手表等。宸曦极光携手厂家，打造 100%正品、便捷、实惠的厂家商城导航平台。</span>
            <span className="about-span">会员联盟参与互动，对平台建设、产品优缺等客观评价，让消费者共建宸曦极光。平台推出各种创意联动活动，让购物变的好玩有趣！宸曦极光要做的是一个属于会员的网站，更是一个会员想要的且需要网站。</span>
          </div>
          <div className="about-text__title">
            三、 宸曦极光运营模式
          </div>
          <div className="about-text__content">
            <span className="about-span">通过宸曦极光完整健全的营销网络——经验丰富的运营推广、技术开发、网站维护团队和集团实力雄厚的资金，联盟众厂家共建厂家商城导购平台，让厂家省下大量的入驻费，带去赖以生存的顾客资源，解除第三方平台对厂家的制约，让厂家重拾线上销售渠道话语权。同时，宸曦极光致力于推动“正品、便捷、实惠”的“F2C 模式”，帮助消费者享受厂家直销的优惠和正品保障，获得更高的生活品质；通过提供厂家商城资讯导购等基础性服务，帮助更多的厂家开拓市场、建立品牌，拥抱互联网＋，实现传统产业转型升级。衷心感谢关注宸曦极光的每一位朋友！</span>
          </div>
        </div>
      </div>
      <Bottom />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartList: selectCartList()
});
const mapDispatchToProps = () => {
  return {
  }
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AboutUs));