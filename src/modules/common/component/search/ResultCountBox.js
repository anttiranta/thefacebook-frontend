// Imports
import React from 'react'
import PropTypes from 'prop-types'

// Component
const ResultCountBox = (props) => {
  const { children } = props

  return (
    <div style={{ backgroundColor: "#D9DFEA", color: "#4C70A0", paddingLeft: '2px' }}>
        {children}   
    </div>
  )
}

// Component Properties
ResultCountBox.propTypes = {
  text: PropTypes.string
}

export default ResultCountBox