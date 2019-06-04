import React from 'react';
import './index.scss';
import Header from '../../../components/util/Header';
import Bottom from '../../../components/util/Bottom';



class ProductList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      toggle: false
    };
  }
  componentDidMount() {
  }
  toggleChange = () => {
    this.setState({ toggle: !this.state.toggle });
  }
  render() {
    return (
      <div className="list">
        <Header />
        <div className="content">
          <div className="top">

          </div>
        </div>
        <Bottom />
      </div>

    )
  }
}
export default ProductList