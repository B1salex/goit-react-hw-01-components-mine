import PropTypes from 'prop-types';
import css from '../TransactionHistory/TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionhistory}>
      <thead>
        <tr>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={css.tr} key={item.id}>
            <td className={css.td}>{item.type}</td>
            <td className={css.td}>{item.amount}</td>
            <td className={css.td}>{item.currency}</td>
          </tr>
        ))}
        ;
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  item: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
