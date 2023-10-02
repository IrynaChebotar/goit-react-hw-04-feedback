import React from 'react';
import { StatisticsText } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <StatisticsText>Good: {good}</StatisticsText>
      <StatisticsText>Neutral: {neutral}</StatisticsText>
      <StatisticsText>Bad: {bad}</StatisticsText>
      <StatisticsText>Total: {total}</StatisticsText>
      <StatisticsText>
        Positive Percentage: {positivePercentage}%
      </StatisticsText>
    </div>
  );
};
