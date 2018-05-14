import React, { Component } from 'react';
import UserMsgBox from './MessageBox/UserMsgBox';
import ContactMsgBox from './MessageBox/ContactMsgBox';

import './messages-page.css';

class MessagesPanel extends Component {
constructor(props){
  super(props);
  this.state={
    inputText:'',
    messages:[]
  }
}



messageDisplayHandler = (messages) => {
  const { myMessages, contactMessages } = this.props.user;
  for (let i = 0; i < myMessages.length ; i++) {
    messages.push(<UserMsgBox name={myMessages[i]} key={i} />);

   if(typeof contactMessages[i] !== 'undefined')
    messages.push(<ContactMsgBox name={contactMessages[i]} key={i+0.5}/>);
  }
}



onTextInputHandler = (e) => {
  this.setState({ inputText: e.target.value });
}

onSubmitHandler = (e) =>{
  e.preventDefault();
  this.props.messagesHandler(this.state.inputText);
}


  render() {
    this.messageDisplayHandler(this.state.messages);
    return (
      <div className="msgPanel">
      {this.state.messages}
      <form onSubmit={this.onSubmitHandler}>
      <input type="text" name="msgInput" className="msgInput" onChange={(e) => this.onTextInputHandler(e)} value={this.state.inputText} />
      <div className="btnCircle"><button className="btnSubmit" type="submit"><i className="zmdi zmdi-mail-send"></i></button></div>
      </form>
      </div>
    )
  }
}


export default MessagesPanel;
