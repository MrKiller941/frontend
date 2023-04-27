import React, { useEffect, useState } from "react";
import ChatServiceFactory from "../../../model/services/ChatService";

const chatService = ChatServiceFactory.createInstance();

function Chat() {
    const initialState = {
        messageValue: "",
        messages: []
    }
    const [state, setState] = useState(initialState);

    useEffect(() => {
        chatService.subscribe((message) => {
            console.log(message);
            setState({
                ...state,
                messages: [...state.messages, message]
            });
        });
        chatService.open();
        return () => {
            chatService.close();
        }
    }, [])


    const handleText = (e) => {
        setState({
            ...state,
            messageValue: e.target.value
        })
    }
    const send = () => {
        if (state.messageValue) {
            chatService.sendMessage(state.messageValue);
            setState({
                ...state,
                messageValue: ""
            })
        }
    }



    return (
        <div>
            <div style={{
                color: "blue",
                width: "350px",
                height: "300px",
                overflowY: "scroll",
                overflowX: "auto",
                //border: "1px solid black",
            }}>
                {state.messages.map((message, index) => {

                    return (
                        <div key={index} style={{
                            marginBottom: "10px",

                        }}>
                            <span style={{
                                color: "black",
                                backgroundColor: "#bce9f7",
                            }}>{`[ ${message.username} : ${message.time} ] ${message.text}`}</span>
                         </div>
                    )
                })}
            </div>
            <input type="text" onChange={handleText} value={state.messageValue}></input>
            <button onClick={send}>{"Отправить"}</button>
        </div>
    )
}

export default Chat;