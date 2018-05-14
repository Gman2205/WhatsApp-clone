import React from 'react'

const UserMsgBox = (props) => {
  return (
    <div className="msgBox">
    <div className="user">
      {props.name}
    </div>
    </div>
  )
}

export default UserMsgBox
