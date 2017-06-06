import React, { Component } from 'react'
import PropTypes from 'prop-types'
import orderBy from 'lodash/orderBy'

import ListItem from './ListItem'

class TransactionHistory extends Component {
  constructor (props) {
    super(props)
    this.state = {
      order: 'createdAt',
      sort: 'asc'
    }
    this.changeOrder = this.changeOrder.bind(this)
  }

  changeOrder (key) {
    if (key !== this.state.order) {
      this.setState({
        order: key
      })
    } else {
      this.setState({
        sort: this.state.sort === 'asc' ? 'desc' : 'asc'
      })
    }
  }

  render () {
    const { transactions } = this.props
    const orderedTransactions = orderBy(transactions, this.state.order, this.state.sort)
    return (
      <table>
        <thead>
          <tr>
            <td onClick={() => this.changeOrder('name')}>Name</td>
            <td onClick={() => this.changeOrder('price')}>Price</td>
            <td onClick={() => this.changeOrder('createdAt')}>Date</td>
            <td onClick={() => this.changeOrder('reference')}>Reference</td>
            <td onClick={() => this.changeOrder('status')}>Status</td>
          </tr>
        </thead>
        <tbody>
          {orderedTransactions.map(item =>
            <ListItem key={item.id} item={item} />
          )}
        </tbody>
      </table>
    )
  }
}

TransactionHistory.propTypes = {
  transactions: PropTypes.array
}

export default TransactionHistory
