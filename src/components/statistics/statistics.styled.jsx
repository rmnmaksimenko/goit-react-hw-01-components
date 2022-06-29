import styled from '@emotion/styled';

export const StatisticsCard = styled.div`
  max-width: fit-content;
  background-color: #c6c6c6;
  display: block;
  padding-top: 5px;
  margin: 20px;
  border-radius: 2px;
`;
export const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  color: #000;
`;
export const StatList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Item = styled.li`
  width: 55px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid black;
`;
export const Label = styled.span`
  display: block;
  color: #000;
`;
export const Percentage = styled.span`
  display: block;
  color: #000;
`;

//   <ul class="stat-list">
//     <li class="item">
//       <span class="label">.docx</span>
//       <span class="percentage">4%</span>
