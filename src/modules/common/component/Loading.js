// Imports
import React from 'react'
import PropTypes from 'prop-types'

// Component
const Loading = (props) => (
  <p style={{ color: 'grey', textAlign: 'center', padding: '2em' }}>{props.message ? props.message : 'loading...'}</p>
)

// Component Properties
Loading.propTypes = {
  message: PropTypes.string
}

export default Loading