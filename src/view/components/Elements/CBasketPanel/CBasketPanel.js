import React from "react"
import CLabel from "../../UI/CLabel/CLabel"
import styles from './CBasketPanel.module.css';

class CBasketPanel extends React.Component {
    render() {
        return (
            <div className={styles.basket}>
                <img src="/images/add-product.png" className={styles.image}></img>
                <div className={styles.dropdown_content}>
                    <div className={styles.dropdown_content_message}>
                        {this.props.products.map((product, idx) => {
                            return <React.Fragment key={idx}>
                                {`${product.name}    ${product.cost} руб`} <br />
                            </React.Fragment>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default CBasketPanel