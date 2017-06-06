import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TransactionForm from '../TransactionForm'
import './MerchantView.css'

class MerchantView extends Component {
  constructor (props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (values) {
    console.log(values)
    this.props.addTransaction(values)
  }

  render () {
    const { transactions } = this.props
    return (
      <div>
        <h1>Tabeo</h1>
        <TransactionForm onSubmit={this.onSubmit} />
        {transactions && transactions.map(item =>
          <div key={item.id}>{item.name}</div>
        )}
      </div>
    )
  }
}

MerchantView.propTypes = {
  transactions: PropTypes.array,
  addTransaction: PropTypes.func.isRequired
}

export default MerchantView
