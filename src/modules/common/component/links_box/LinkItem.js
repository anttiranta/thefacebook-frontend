// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'

// Component
const LinkItem = (props) => {
  const { children, to } = props

  return (
    <tr>
      <td><Link to={to}>{children}</Link></td>
    </tr>
  )
}

// Component Properties
LinkItem.propTypes = {
  to: PropTypes.string.isRequired,
  type: PropTypes.string
}

export default withRouter(LinkItem)