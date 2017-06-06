import React from 'react'
import { render } from 'enzyme'
import FormInput from './index'

describe('<FormInput />', () => {
  it('renders without crashing', () => {
    const input = { name: 'firstName', value: '' }
    const label = 'First name'
    const meta = { touched: true, error: 'Required' }
    const wrapper = render(<FormInput input={input} label={label} meta={meta} />)
    expect(wrapper.find('label').text()).toEqual(label)
    expect(wrapper.find('input')).toBeDefined()
  })
})
