import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import MainPage from './components/MainPage/MainPage';
import UserPage from './components/UserPage/UserPage';

import './App.css';

const userList = [
  {
    userId:1,
    name:'Ana',
    lastMessage: 'Mashina',
    time: '15:55',
    imgPath: 'https://www.margna.ch/images/content/team/Simona-Seiler.jpg',
    myMessages: ["me1", "me2"],
    contactMessages: ["cont1", "cont2"]
  },
  {
    userId:2,
    name:'Bob',
    lastMessage: 'Linkin Park',
    time: '14:55',
    imgPath: 'http://holobest.com/directorys/wp-content/uploads/2014/08/013.png',
    myMessages: ["me3", "me4"],
    contactMessages: ["cont3", "cont4"]
  },
  {
    userId:3,
    name:'John',
    lastMessage: 'Coldplay',
    time: '16:55',
    imgPath: 'https://www.rheinmetall-automotive.com/fileadmin/media/kspg/pressecenter/pressebilder/Personen/KSPG_AG_Horst_Binnig-2_CEO.jpg',
    myMessages: ["me5", "me6"],
    contactMessages: ["cont5", "cont6"]
  },
];

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user:{
        id:0,
        name:'',
        imgPath:'',
        myMessages:[],
        contactMessages:[]
      }
    }
  }


  setCurrentUser = (item) => {
    const { user } = this.state;
    user.id = item.userId;
    user.name = item.name;
    user.imgPath = item.imgPath;
    user.myMessages = item.myMessages;
    user.contactMessages = item.contactMessages;
  }

  messagesHandler = (text) => {
  const user = {...this.state.user};
  user.myMessages.push(text);
  this.setState({user: user})
  setTimeout(() => {
  user.contactMessages.push('Hello there!');
  userList[user.id - 1].lastMessage = user.contactMessages[user.contactMessages.length - 1];
  this.setState({user: user})
  
  },1000);
  }


  render() {
    return (
      <div className="App">
        <Switch>
        <Route exact path="/"  component={() => <MainPage  users={userList} setCurrentUser={this.setCurrentUser} />} />
        <Route exact path="/user"  component={() => <UserPage user={this.state.user} messagesHandler={this.messagesHandler} />} />
        </Switch>
      </div>
    );
  }
}

export default App;


