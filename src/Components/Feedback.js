import React, { Component } from 'react';
import styled from 'styled-components';
import Statistics from './Statistics.js';
import FeedbackOptions from './FeedbackOptions.js';
import Section from './Section.js';
import Notification from './Notification.js';

const Container = styled.div`
  margin: 0 auto;
  width: 300px;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid rgba(0,0,255,0.3);
  box-shadow: 0 0 1px rgba(0,0,255,0.3);
  :not(:last-child){
    margin-bottom: 15px;
  }
`;



class Feedback extends Component {
  static defaultProps = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc,el) => acc += el);
  }
  
  countPositiveFeedbackPercentage = () => {
    return Math.round(100 * this.state.good / this.countTotalFeedback());
  }

  clickHandler = event => {   
    const { name } = event.target;
    this.setState(state => ({ [name]: state[name] + 1 }));
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options= { ["good", "neutral", "bad"] } 
            onLeaveFeedback={ this.clickHandler }
          />
        </Section>
 
        <Section title="Statistics">
          {
            total
              ? <Statistics
                  good={ good }
                  neutral={ neutral }
                  bad={ bad }
                  total={ total }
                  positivePercentage={ positivePercentage }
                />
              : <Notification message="No feedback given"/>
          }    
        </Section>
      </Container>
    );
  }
}

export default Feedback;