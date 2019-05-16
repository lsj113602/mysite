import React from 'react';
import './index.scss';


class IndexPop extends React.Component {
  constructor(props, context) {
    console.log('constructor')
    super(props, context);
    this.state = {
      toggle: false,
      index: 0
    };
  }
  componentDidMount() {
  }
  toggleChange = () => {
    this.setState({ toggle: !this.state.toggle });
  }
  render() {
    return (
      <div className="index_pop">
      </div>
    )
  }
}
export default IndexPop