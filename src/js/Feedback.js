import React, { Component } from 'react';
// import styled, { css } from 'styled-components';
import Statistics from './Statistics.js';
import FeedbackOptions from './FeedbackOptions.js';
import Section from './Section.js';
import Notification from './Notification.js';


const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
}


class Feedback extends Component {
  static defaultProps = {};

  state = { ...INITIAL_STATE };

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
      <div>
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
      </div>
    );
  }
}

export default Feedback;