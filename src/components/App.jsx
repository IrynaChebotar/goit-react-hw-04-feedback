import React, { useState } from 'react';
import { Feedback } from './Feedback/Feedback';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedbackClick = type => {
    setFeedback(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    const { good } = feedback;
    return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
  };

  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div>
      <Section title="Please leave feedback">
        <Feedback
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedbackClick}
        />
      </Section>

      <Section title="Statistics">
        {totalFeedback ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification />
        )}
      </Section>
    </div>
  );
};
