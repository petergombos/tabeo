import React from 'react'
import PropTypes from 'prop-types'

import ListItem from './ListItem'

const TransactionHistory = ({ transactions }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
          <td>Date</td>
          <td>Reference</td>
          <td>Status</td>
        </tr>
      </thead>
      <tbody>
        {transactions.map(item =>
          <ListItem key={item.id} item={item} />
        )}
      </tbody>
    </table>
  )
}

TransactionHistory.propTypes = {
  transactions: PropTypes.array
}

export default TransactionHistory
