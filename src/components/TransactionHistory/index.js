import React, { Component } from 'react'
import PropTypes from 'prop-types'
import orderBy from 'lodash/orderBy'

import ListItem from './ListItem'

const toDecimal = (num) =>
  parseFloat(Math.round(num * 100) / 100).toFixed(2)

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
    const orderedTransactions =
      orderBy(
        transactions.map(i => {
          i.price = parseFloat(i.price)
          return i
        }), this.state.order, this.state.sort)
    const totalAmount = transactions.reduce((mem, item) =>
      mem + parseFloat(item.price)
    , 0)
    return (
      <div>
        <div>
          <span className='sales'>Sales: {transactions.length}</span>
          <span className='total'>Total Amount: £{toDecimal(totalAmount)}</span>
        </div>
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
      </div>
    )
  }
}

TransactionHistory.propTypes = {
  transactions: PropTypes.array
}

export default TransactionHistory
