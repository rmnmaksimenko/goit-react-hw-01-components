import PropTypes from 'prop-types';
import {
  StatisticsCard,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './statistics.styled';

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

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;
