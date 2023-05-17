import React from "react";
import styles from './CText.module.css';

function CText(props){
    return (
        <p className={styles.text}>{props.text}</p>
    )
}

export default CText;