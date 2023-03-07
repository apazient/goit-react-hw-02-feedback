import React, { Component } from 'react';

import Feedback from './Feedback/Feedback';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    neutral: 0,
    good: 0,
    bad: 0,
  };

  handleClick = e => {
    console.log(e.target.name);
    const { name } = e.target;
    this.setState({ [name]: this.state[name] + 1 });
  };

  countTotalFeedback = () => {
    return this.state.bad + this.state.good + this.state.neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, bad, neutral } = this.state;
    return Math.round((good / (good + bad + neutral)) * 100) + '%';
  };

  render() {
    const { good, bad, neutral } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          margin: '0 auto',
          padding: '0 20px',
          display: 'block',         
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <Feedback options={this.state} onLeaveFeedback={this.handleClick} />
        </Section>
        <Section title="Statistic">
          {this.countTotalFeedback()===0 ? <Notification message="There is no feedback" />
            : <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />}
        </Section>
      </div>
    );
  }
}
