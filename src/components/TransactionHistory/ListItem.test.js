import React from 'react'
import { shallow } from 'enzyme'
import ListItem from './ListItem'

describe('<ListItem />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<ListItem item={{
      name: 'test name',
      price: 123,
      reference: 'test reference',
      createdAt: new Date().getTime()
    }} />)
    expect(wrapper.find('.price').text()).toEqual('£123.00')
  })
})
