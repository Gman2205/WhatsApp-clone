import React from 'react';
import User from './User';
import { List } from 'material-ui';

const UserList = (props) => {
  return (
    <div>
      <List>
      <User users={props.users} setCurrentUser={props.setCurrentUser} />
      </List>
    </div>
  )
}

export default UserList