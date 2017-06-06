import React from 'react'
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types'

import FormInput from '../FormInput'

const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  }
  if (!values.price || values.price <= 0) {
    errors.price = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.customerName) {
    errors.customerName = 'Required'
  }
  return errors
}

const TransactionForm = (props) => {
  const { submitting, handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name='name' type='text' component={FormInput} label='Transaction Name *' />
      <Field name='price' type='number' component={FormInput} label='Cash Price *' />
      <Field name='reference' type='text' component={FormInput} label='Internal Reference' />
      <Field name='email' type='email' component={FormInput} label='Customer Email Address *' />
      <Field name='customerName' type='text' component={FormInput} label='Customer First Name *' />
      <div>
        <button type='submit' disabled={submitting}>Submit</button>
      </div>
    </form>
  )
}

TransactionForm.propTypes = {
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'newTransaction',
  validate
})(TransactionForm)
