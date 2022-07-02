import PropTypes from 'prop-types';
import { TransactionBox, TransactionTable } from './transactions.styled';

const Transactions = ({ data }) => {
  return (
    <TransactionBox>
      <TransactionTable>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {data.map(transactrion => (
            <tr key={transactrion.id}>
              <td>{transactrion.type}</td>
              <td>{transactrion.amount}</td>
              <td>{transactrion.currency} </td>
            </tr>
          ))}
        </tbody>
      </TransactionTable>
    </TransactionBox>
  );
};

Transactions.prototypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default Transactions;
