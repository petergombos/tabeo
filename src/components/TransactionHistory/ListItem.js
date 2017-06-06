import React from 'react'
import PropTypes from 'prop-types'

import decimal from '../../utils/decimal'

const ListItem = ({ item }) => {
  const date = new Date(item.createdAt)
  const dateString = ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2)
  return (
    <tr>
      <td className='name'>{item.name} ({item.customerName})</td>
      <td className='price'>£{decimal(item.price)}</td>
      <td className='createdAt'>{dateString}</td>
      <td className='reference'>{item.reference}</td>
      <td className={item.status === 'pending' ? 'status pending' : 'status'}>{item.status}</td>
    </tr>
  )
}

ListItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default ListItem
