import React from 'react'
import { AppBar, Avatar } from 'material-ui';

const UserPageHeader = (props) => {
  return (
    <div className="userPage-header">
      <AppBar 
        title={props.userName}
        iconElementLeft={
          <Avatar src={props.img} />
        }
        style={{backgroundColor:'#075e54'}}
      />
    </div>
  )
}

export default UserPageHeader
