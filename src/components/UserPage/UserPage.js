import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';

import UserPageHeader from './UserPageHeader';
import MessagesPanel from './MessagesPanel';


const UserPage = (props) => {

  return (
    <MuiThemeProvider>
    <div className="user-page">
      <UserPageHeader userName={props.user.name} img={props.user.imgPath} />
      <MessagesPanel user={props.user} messagesHandler={props.messagesHandler} />
    </div>
    </MuiThemeProvider>
  )
}

export default UserPage
