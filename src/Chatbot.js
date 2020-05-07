import React from "react";
import Input from './Input';
import Messages from'./Messages';


class Chatbot extends React.Component{


  constructor(props){
    super(props)
   
  
  this.state = {
    messages: [],
    mUser:this.props.location.state.user      
}
}


 
render() {
    return (

      <div>
        <div className="chatbot-header">
        <h3>Chatbot</h3>
        </div>
        <Messages
          messagesList={this.state.messages} />

        <Input
          onSendMessage={this.onSendMessage} />
      </div>

    );
  }
onSendMessage = (message,uname,time, index) => {
    const { messages,mUser } = this.state;
    messages.push({
      text: message,
      tag: index,
      username:mUser,
      m_time:time
    })
    this.setState({
      messages: messages
    })
  }
}

export default Chatbot;

