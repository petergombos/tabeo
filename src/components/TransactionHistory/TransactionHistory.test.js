import React from 'react'
import { render } from 'enzyme'
import TransactionHistory from './index'

const transaction = {
  id: '28498789we7r9e8',
  name: 'test name',
  email: 'test@email.com',
  reference: 'cool ref',
  createdAt: new Date().getTime(),
  customerName: 'firstname',
  price: 10
}

describe('<TransactionHistory />', () => {
  it('renders without crashing', () => {
    const wrapper = render(<TransactionHistory transactions={[transaction]} />)
    expect(wrapper.find('.stats .pull-right').text()).toEqual('Total Amount: £10.00')
    expect(wrapper.find('tbody')).toHaveLength(1)
  })
})
