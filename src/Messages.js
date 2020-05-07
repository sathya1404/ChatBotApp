
import React from "react";

class Messages extends React.Component {
  render() {
    const {messagesList} = this.props;
    return (
      <ul className="messages-list">
        {
        messagesList.map(msg=>
        this.renderMessage(msg))
        }
    
      </ul>
    );
  }

  renderMessage(message) {
    const {text,username,m_time,tag}=message;
    const className = tag==0 ? "chat-left" : "chat-right";
    const className2 = tag==0 ?  "time-layout-right":"time-layout-left";


    return (
      <li className="message-li">
        <div className={className}>{text}
       </div> 
       <div className={className2}>{username}</div>
<div className={className2}>{m_time}</div>

      </li>
    );
  }
}


export default Messages;