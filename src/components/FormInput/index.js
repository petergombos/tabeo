import React from 'react'
import PropTypes from 'prop-types'

const Field = ({ input, label, type, meta: { touched, error, warning }, className }) => (
  <div className={className}>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
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
