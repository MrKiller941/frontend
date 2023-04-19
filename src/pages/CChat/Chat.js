import React, { useEffect, useState } from "react";
import AuthService from "../../services/authService";
import Message from "./Message";
import ChatServiceFactory from "../../services/chatService";

class Chat extends React.Component {
    
    constructor(){
        super();
        this.state = {
            messages: [],
            inputValue: ""
        };
        this.chatService = ChatServiceFactory.createInstance();
        this.chatService.subscribe((message) => {
            this.setState({
                messages: [...this.state.messages, message]
            })
        })
        this.chatService.open();
        this.handleButton = this.handleButton.bind(this);
    }

    handleButton(){
        if(this.state.inputValue){
            this.chatService.sendMessage(this.state.inputValue);
            this.setState({
                inputValue: ""
            })
        }
    }

    render(){
        return (
            <div className="chat">
            {this.state.messages.map((message, index) => (
              <Message key={index} content={message}/>
            ))}
                    <input
                    type="text"
                    value={this.state.inputValue}
                    onChange={(event) => this.setState({inputValue: event.target.value})}
                    />
                    <button onClick={this.handleButton}>Send</button>
            </div>
        )
    }
}

export default Chat;