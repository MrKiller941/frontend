function Message(props){
    return (
        <div>
            <p>{"[" + props.content.username + "][" + props.content.time + "] -> " + props.content.text}</p>
        </div>
    )
}

export default Message;