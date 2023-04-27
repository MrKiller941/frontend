import React, { useEffect, useState } from 'react';
import CBasketPanel from '../../components/Elements/CBasketPanel/CBasketPanel';
import CCatElement from '../../components/Elements/CCatElement/CCatElement';
import CButton from "../../components/UI/CButton/CButton";
import CatalogService from '../../../model/services/catalogService';
import Chat from "../../components/func/Chat";
import { useNavigate } from 'react-router-dom';
import "./CCatalogPage.css"
import { useAuthUser } from '../../../redux/hooks';

function CCatalogPage(props) {
    const initialState = {
        cartProducts: [],
        products: []
    }
    const [state, setState] = useState(initialState);
    const navigate = useNavigate();
    const useAuth = useAuthUser();

    useEffect(() => {
        const getData = async () => {
            const products = await CatalogService.getCatalog()
            setState({
                ...state,
                products: products
            })
        };
        getData();
    }, [])

    const addToCart = (product) => {
        setState((prev) => ({
            ...state,
            cartProducts: [...prev.cartProducts, product]
        }))
    }

    const addProduct = () => {
        navigate("/products/add")
    }

    const deleteProduct = () => {
        navigate("/products/delete")
    }

    return (
        <>
            <CBasketPanel products={state.cartProducts} />
            <CButton onClick={addProduct}>Добавить продукт</CButton>
            <br />
            <CButton onClick={deleteProduct}>Удалить продукт</CButton>

            <div className="catalog">
                {state.products.map((product, index) => {
                    console.log(product);
                    return <CCatElement product={product} key={index} onClick={() => addToCart(product)} />
                })}
            </div>

            <div>
                <CButton onClick={useAuth.signOut}>Выйти</CButton>
            </div>

            <div style={{ float: "right" }}>
                <Chat/>
            </div>
        </>
    )
}

export default CCatalogPage;