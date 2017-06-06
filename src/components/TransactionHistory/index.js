import React, { Component } from 'react'
import PropTypes from 'prop-types'
import orderBy from 'lodash/orderBy'

import ListItem from './ListItem'
import decimal from '../../utils/decimal'
import './TransactionHistory.css'
import arrows from './arrows.png'

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
      <div className='transaction-history'>
        <div className='stats'>
          <span>Sales: {transactions.length}</span>
          <span className='pull-right'>Total Amount: £{decimal(totalAmount)}</span>
        </div>
        <table>
          <thead>
            <tr>
              <td onClick={() => this.changeOrder('name')}>Name<img alt='' src={arrows} /></td>
              <td onClick={() => this.changeOrder('price')}>Price<img alt='' src={arrows} /></td>
              <td onClick={() => this.changeOrder('createdAt')}>Date<img alt='' src={arrows} /></td>
              <td onClick={() => this.changeOrder('reference')}>Reference<img alt='' src={arrows} /></td>
              <td onClick={() => this.changeOrder('status')}>Status<img alt='' src={arrows} /></td>
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
