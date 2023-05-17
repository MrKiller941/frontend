import React from 'react'
import CButton from '../../UI/CButton/CButton'
import styles from './CCatElement.module.css';

class CCatElement extends React.Component {
    render() {
        return (
            <div className={styles.cat_element}>
                <div className={styles.name}>{this.props.product.name}</div>
                <img src={this.props.product.img} className={styles.image}/>
                <div className={styles.cost}>{this.props.product.cost} руб 	</div>
                <CButton onClick={(e) => this.props?.onClick(e)}>Купить</CButton>
                <div className={styles.desc}>{this.props.product.count} штук</div>
            </div>
        )
    }
}

export default CCatElement