import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './MerchantView.css'

class MerchantView extends Component {
  render () {
    return (
      <div>
        <h1>Tabeo</h1>
      </div>
    )
  }
}

MerchantView.propTypes = {
  transactions: PropTypes.array
}

export default MerchantView
