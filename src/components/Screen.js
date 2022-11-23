import React from 'react'

const Screen = (props) => {
    
  return (
    <div>
        <input type="text" defaultValue='0' value={props.value} onChange={props.handleValue}/>
    </div>
  )
}

export default Screen