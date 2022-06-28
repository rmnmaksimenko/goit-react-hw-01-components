import PropTypes from 'prop-types';
import {
  StatisticsCard,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './statistixs.styled';

const Statistics = ({ title, stats }) => {
  const statsMarkup = stats.map(stat => {
    return (
      <Item key={stat.id}>
        <Label>{stat.label}</Label>
        <Percentage>{stat.percentage}%</Percentage>
      </Item>
    );
  });
  return (
    <StatisticsCard>
      {{ title } && <Title>{title}</Title>}
      <StatList>{statsMarkup}</StatList>
    </StatisticsCard>
  );
};

export default Statistics;
