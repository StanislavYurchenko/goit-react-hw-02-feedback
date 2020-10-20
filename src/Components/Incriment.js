import React, { Component }  from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  width: 300px;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid rgba(0,0,255,0.3);
  box-shadow: 0 0 1px rgba(0,0,255,0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  :not(:last-child){
    margin-bottom: 15px;
  }
`;

const Button = styled.button`
  flex-basis: 43%;
  border-radius: 5px;
  border: 1px solid rgba(0,0,255,0.3);
  outline: none;
  box-shadow: 0 0 1px rgba(0,0,255,0.3);
  transition: all 0.3s linear;
  background-color: #FFF;
  padding: 5px;
  font-size: 16px;
  cursor: pointer;
`;

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
      <Container>
        <span>{this.state.value}</span>
        <Button type="button" onClick = {this.incrementHandler} >Increment by {step}</Button>
        <Button type="button" onClick = {this.decrementHandler} >Decrement by {step}</Button>
      </Container>
    );
  }
}

export default Increment;