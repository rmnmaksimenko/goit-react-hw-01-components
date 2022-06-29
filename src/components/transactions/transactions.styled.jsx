import styled from '@emotion/styled';

export const TransactionBox = styled.div`
  display: block;
  width: fit-content;
  margin: 20px;
  padding: 20px;
  background-color: #777;
`;
export const TransactionTable = styled.table`
  width: 450px;
  table-layout: auto;
  border-collapse: collapse;
  background-color: #fff;
  color: #000;

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #00bcd5;
    color: white;
  }
  thead {
    display: block;
  }

  tbody {
    display: block;
    height: 400px;
    overflow: auto;
  }

  tbody td,
  thead th {
    width: 125px;
  }

  td,
  th {
    border: 1px solid #ddd;
    padding: 8px;
  }
  tr:nth-of-type(2n) {
    background-color: #ecf1f3;
  }
`;
