import React from 'react';
import { FeedbacksBtn, Wrapper } from './Feedback.styled';
export const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <Wrapper>
      {options.map(option => (
        <FeedbacksBtn key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </FeedbacksBtn>
      ))}
    </Wrapper>
  );
};
