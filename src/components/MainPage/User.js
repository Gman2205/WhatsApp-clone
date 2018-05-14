import React from 'react'
import { ListItem, Avatar } from 'material-ui';
import { withRouter } from "react-router-dom";


const User = (props) => {
  const userItem = props.users.map( item => 
    <ListItem 
    key={item.userId}
    leftAvatar={<Avatar src={item.imgPath} /> }
    primaryText={item.name}
    secondaryText={
      <p>{item.lastMessage}</p>
    }
    onClick={() => {
      props.setCurrentUser(item);
      props.history.push('/user');
    }}
    />
   );

  return (
    <div>
   {userItem}
   </div>
  )
}

export default withRouter(User);
