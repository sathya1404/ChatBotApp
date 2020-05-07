import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)


        this.state = {
            url: "https://065ad90e.ngrok.io/bot/",
            username: "",
            phonenumber: "",
             users:[
                 {
                     "url":"https://065ad90e.ngrok.io/bot/",
                     "phone":"9442607200",
                     "username":"sathya"
                 },{
                    "url":"https://065ad90e.ngrok.io/bot/",
                    "phone":"123456789",
                    "username":"user2"
                }
                 
             ]

        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    urlhandler = (event) => {
        this.setState({
            url: event.target.value
        })
    }
    usernamehandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    phonenumberhandler = (event) => {
        this.setState({
            phonenumber: event.target.value
        })
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
      }

    handleSubmit = (event) => {
        console.log(this.state);
        this.setState({
            url: "",
            username: "",
            phonenumber: ""
        })
        event.preventDefault()

        this.state.users.map((user)=>{
            if(this.state.phonenumber===user.phone && this.state.username ===user.username ){
                this.props.history.push({
                    pathname:'/Chatbot',
                    state:{user:this.state.username}
                })
            }

        })

    }




    render() {
        return (
<div>
    <div className="header"><h2>Form</h2></div>
<form onSubmit={this.handleSubmit}>
  <div className="chat-listed">
<input className="url" type="text"  value={this.state.url} onChange={this.urlhandler} placeholder="url..." />
 <input className="username" type="value" value={this.state.username} onChange={this.usernamehandler} placeholder="username..." />
<input  classname="phonenumber" type="variable"   value={this.state.phonenumber} onChange={this.phonenumberhandler} placeholder="phonenumber..." />
 <input type="submit" value="Submit" />
 </div>
 </form>

</div>

 )
 }
}

export default Form
