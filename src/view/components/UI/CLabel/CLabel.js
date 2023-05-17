import React from 'react'
import styles from './CLabel.module.css';

class CLabel extends React.Component {
    render() {
        return (
            <div className={styles.label}>
                {this.props.children}
            </div>
        )
    }
}

export default CLabel