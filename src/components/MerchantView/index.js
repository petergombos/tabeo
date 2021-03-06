import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TransactionForm from '../TransactionForm'
import TransactionHistory from '../TransactionHistory'
import './MerchantView.css'

class MerchantView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tab: 'form'
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  // Toggle tabs
  showTab (key) {
    if (this.state.tab !== key) {
      this.setState({
        tab: key
      })
    }
  }

  // Submit values to redux, swith current tab to history view
  onSubmit (values) {
    this.props.addTransaction(values)
    this.showTab('history')
  }

  render () {
    const { transactions } = this.props
    return (
      <div className='merchant'>
        <div className='company'>
          <div>
            <span>Company Name</span>
            <span className='pull-right'>Last logged in</span>
          </div>
          <div>
            <span>sample@address.com</span>
            <span className='pull-right'>05/06/17 13:12</span>
          </div>
        </div>
        <div className='tabs'>
          <div
            onClick={() => this.showTab('form')}
            className={this.state.tab === 'form' ? 'active' : ''}>
            start a new transaction
          </div>
          <div
            onClick={() => this.showTab('history')}
            className={this.state.tab === 'history' ? 'active' : ''}>
            transaction history
          </div>
        </div>
        {this.state.tab === 'form' &&
          <TransactionForm onSubmit={this.onSubmit} />
        }
        {this.state.tab === 'history' &&
          <TransactionHistory transactions={transactions} />
        }
      </div>
    )
  }
}

MerchantView.propTypes = {
  transactions: PropTypes.array,
  addTransaction: PropTypes.func.isRequired
}

export default MerchantView
