import React from 'react'
import './message.css'

function Message(props){
  if(props.type == 'self') {
    return (
      <>
      <div className='mymsg'>
          {props.text}
      </div>
      <h4 className='self'>You</h4>
      </>
    )
  }
  else{
    return (
      <>
      <div className='msg'>
          {props.text}
      </div>
      <h4 className='dif'>{props.user}</h4>
      </>
    )
  }
  
}

export default Message;
