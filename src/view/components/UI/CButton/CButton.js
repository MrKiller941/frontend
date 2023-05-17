import React from 'react'
import styles from './CButton.module.css';

class CButton extends React.Component {
    render() {
        return (
            <div className={styles.button_wrap} >
                <button className={styles.button} onClick={this.props.onClick}>
                    {this.props.children}
                </button>
            </div >
        )
    }
}

export default CButton;