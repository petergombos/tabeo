import React from 'react'
import PropTypes from 'prop-types'

const Field = ({ input, label, type, meta: { touched, error }, className }) => (
  <div className={className}>
    <label>{label}</label>
    <div>
      <input
        {...input}
        type={type}
        className={touched && error ? 'required' : ''} />
    </div>
  </div>
)

Field.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
  className: PropTypes.string
}

export default Field
