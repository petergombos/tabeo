import React from 'react'
import PropTypes from 'prop-types'

const ListItem = ({ item }) => {
  return (
    <tr>
      <td className='name'>{item.name} ({item.customerName})</td>
      <td className='price'>{item.price}</td>
      <td className='createdAt'>{new Date(item.createdAt).toDateString()}</td>
      <td className='reference'>{item.reference}</td>
      <td className='status'>{item.status}</td>
    </tr>
  )
}

ListItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default ListItem
