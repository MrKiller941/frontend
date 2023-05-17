import React from "react";
import Text from "../../simple/Text";
import styles from './CMessage.module.css';

function CMessage(props){
    return (
        <div className={styles.message}>
            <Text text={"[ " + props.content.t + " ]"}></Text>
            <Text text=" "></Text>
            <Text text={props.content.text}></Text>
        </div>
    )
}

export default CMessage;