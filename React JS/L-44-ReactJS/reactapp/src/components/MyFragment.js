import React from 'react'

const MyFragment = (props) => {
    const children = props.children;
    console.log(children);
  return (
    children.map((c)=>c)
  )
}

export default MyFragment