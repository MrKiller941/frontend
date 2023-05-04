import React, { useEffect, useRef, useState } from "react";
import ChatServiceFactory from "../../../model/services/ChatService";
import classes from './Chat.module.css';

const chatService = ChatServiceFactory.createInstance();

function Chat() {

    const [messageValue, setMessageValue] = useState("");
    const [messages, setMessages] = useState([]);
    const chatRef = useRef(null);

    useEffect(() => {
        chatService.subscribe((message) => {
            setMessages([...messages, message]);
        });
        chatService.open();
        return () => {
            chatService.close();
        }
    }, [messages])


    const handleText = (e) => {
       setMessageValue(e.target.value);
    }
    const send = () => {
        if (messageValue) {
            chatService.sendMessage(messageValue);
            setMessageValue("");
        }
    }
    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages])



    return (
        <div className={classes.chat}>
            <div style={{
                width: "350px",
                height: "300px",
                overflowY: "scroll",
                overflowX: "auto",
            }}
            ref= {chatRef}>
                {messages.map((message, index) => {

                    return (
                        <div key={index} style={{

                            marginBottom: "10px",
                        
                        }}>
                            <span style={{
                                color: "#8b00ff",
                                backgroundColor: "white",
                                fontSize: "24px"
                            }}>{`[ ${message.username} : ${message.time} ] ${message.text}`}</span>
                         </div>
                    )
                })}
                <div ref = {chatRef}
                ></div>
            
            </div>
            <input placeholder="Введите сообщение" type="text" onChange={handleText} value={messageValue}></input>
            <button onClick={send}>{"Отправить"}</button>
        </div>
    )
}

export default Chat;