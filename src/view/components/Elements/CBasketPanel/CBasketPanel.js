import React from "react"
import CLabel from "../../UI/CLabel/CLabel"
import "./CBasketPanel.css"

class CBasketPanel extends React.Component {
    render() {
        return (
            <div className="dropdownContainer">
                <br />
                <br />
                <br />
                <img src="/images/add-product.png" id="userImg" width="60" height="60" className="basketImage"></img>
                <div className="dropdownContent">
                    <div className="dropdownContentLineMessage">
                        {this.props.products.map((product, idx) => {
                            return <React.Fragment key={product.medic_id}>
                                {`${product.medic_names}    ${product.medic_cost} руб`} <br /><br />
                            </React.Fragment>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default CBasketPanel