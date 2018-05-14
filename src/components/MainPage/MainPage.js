import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainPageHeader from './MainPageHeader';
import UserList from './UserList';



export default class MainPage extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <div>
            <MainPageHeader />
            <UserList users={this.props.users} setCurrentUser={this.props.setCurrentUser} />
            </div>
         </MuiThemeProvider>        
    )
  }
}
