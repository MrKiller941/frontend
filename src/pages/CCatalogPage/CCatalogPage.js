import React from 'react';
import { withRouter } from 'react-router-dom'
import CBasketPanel from '../../components/Elements/CBasketPanel/CBasketPanel';
import CCatElement from '../../components/Elements/CCatElement/CCatElement';
import CButton from "../../components/UI/CButton/CButton";
import CatalogService from '../../services/catalogService';
import Chat from "../CChat/Chat";

class CLogPage extends React.Component {
    state = {
        cartProducts: [],
        products: []
    }

    componentDidMount = () => {
        const getData = async () => {
            const products = await CatalogService.getCatalog()
            this.setState({
                products
            })
        }

        getData()
    }

    addToCart = (product) => {
        this.setState((prev) => ({
            cartProducts: [...prev.cartProducts, product]
        }))
    }

    addProduct = () => {
        this.props.history.push("/products/add")
    }

    deleteProduct = () => {
        this.props.history.push("/products/delete")
    }

    render() {
        return (
            <>
                <CBasketPanel products={this.state.cartProducts} />
                <CButton onClick={this.addProduct}>Добавить продукт</CButton>
                <CButton onClick={this.deleteProduct}>Удалить продукт</CButton>



                <div style={{display: "block"}} >
                    <div className="catalog" style={{float: "left"}}>
                        {this.state.products.map((product, idx) => {
                            return <CCatElement product={product} key={idx} onClick={() => this.addToCart(product)}/>
                        })}
                    </div>
                    <div style={{float: "right"}}>
                        <Chat></Chat>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(CLogPage)