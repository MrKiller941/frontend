import React, { useEffect, useRef, useState } from "react";
import ChatServiceFactory from "../../../../model/services/ChatService";
import classes from './CChat.module.css';

const chatService = ChatServiceFactory.createInstance();

function CChat() {

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
            <div className={classes.messages}
            ref= {chatRef}>
                {messages.map((message, index) => {

                    return (
                        <div key={index} className={classes.message}>
                            <span className={classes.message_content}>
                            {`[ ${message.username} : ${message.time} ] ${message.text}`}</span>
                         </div>
                    )
                })}
                <div ref = {chatRef}
                ></div>
            
            </div>
            <input placeholder="Введите сообщение" type="text" onChange={handleText} value={messageValue} className={classes.input}></input>
            <button onClick={send} className={classes.button}>{"Отправить"}</button>
        </div>
    )
}

export default CChat;