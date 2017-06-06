import React from 'react'
import { shallow } from 'enzyme'
import NavBar from './index'

describe('<NavBar />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NavBar />)
    expect(wrapper.find('nav').text()).toEqual('Tabeo')
  })
})
