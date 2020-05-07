import { Component } from "react";
import React from "react";

class Input extends Component {
  state = {
    username: "",
    tag: ""
  }
  onChange(e) {
    this.setState({ text: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ text: "" });
    this.setState({ tag: 0 });

    var mDate2 = new Date();
    var date2 =  mDate2.getHours()+':'+ mDate2.getMinutes();

    //this is the  message from input 
    this.props.onSendMessage(this.state.text,"",date2);
    
    const requestOptions = {
      method: 'POST',
      // headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify
        ({
          "type": "message",
          "payload": {
            "source": "919442607200",
            "type": "text",
            "payload": {
              "text": this.state.text
            },
            "sender": {
              "phone": "919442607200",
              "name": "Sathya"
            }
          }
        })
    };

    var mDate = new Date();
    var date =  mDate.getHours()+':'+ mDate.getMinutes();
    

    // fetch('http://dummy.restapiexample.com/api/v1/create', requestOptions)
      fetch('https://065ad90e.ngrok.io/bot/', requestOptions)
      //  .then(response => response.json())
       
       .then(response => response.text())
      // .then(data => this.props.onSendMessage(data.status,"",date,0));
     .then(data => this.props.onSendMessage(data,"",date,0));

  }

  render() {
   
      
    return (
       <div className="Input">
       <form onSubmit={e => this.onSubmit(e)}>
       
          <input
            onChange={e => this.onChange(e)}
            value={this.state.text}
            type="text"
            placeholder="Enter your message and press ENTER"
            autofocus="true" />
          <button type="submit">Send</button>
          
        </form>
      </div>
          
    );

  }
}
 
export default Input;