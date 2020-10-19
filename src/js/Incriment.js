import React, { Component }  from 'react';
// import PropTypes from 'prop-types';


class Increment extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };
  static propTypes = {};

  state = {
    value: this.props.initialValue,
  };

  incrementHandler = (event) => {
    this.setState((state, props) => ({ value: state.value + props.step }))
  }
  
  decrementHandler = (event) => {
    this.setState((state, props) => ({ value: state.value - props.step }))
  }

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>{this.state.value}</span>
        <button type="button" onClick = {this.incrementHandler} >Increment by {step}</button>
        <button type="button" onClick = {this.decrementHandler} >Decrement by {step}</button>
      </div>
    );
  }
}

export default Increment;