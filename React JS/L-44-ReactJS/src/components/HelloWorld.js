import React from 'react'
import InitailWorld from './InitailWorld'

const HelloWorld = () => {
    let styles = {
        'background-color':'orange'
    }
  return (
    <div style={styles}>
        <InitailWorld/>
        <div>HelloWorld!!</div>
    </div>
  )
}

export default HelloWorld