import React, { useEffect, useState } from 'react';
import CBasketPanel from '../../components/Elements/CBasketPanel/CBasketPanel';
import CCatElement from '../../components/Elements/CCatElement/CCatElement';
import CButton from "../../components/UI/CButton/CButton";
import CatalogService from '../../../model/services/catalogService';
import Chat from '../../components/Elements/CChat/CChat';
import { useNavigate } from 'react-router-dom';
import styles from './CCatalogPage.module.css';
import { useListenerIsAuth, useLogout } from '../../../redux/api';

function CCatalogPage(props) {
    const initialState = {
        cartProducts: [],
        products: []
    }
    const [state, setState] = useState(initialState);
    const navigate = useNavigate();

    const isAuth = useListenerIsAuth();
    const logoutA = useLogout();

    useEffect(() => {
        if(!isAuth){
            navigate('/');
        }
    }, [isAuth])

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
        <div className={styles.page}>  
            <header className={styles.header}>
                <div className={styles.header_element}>
                    <CBasketPanel products={state.cartProducts} />
                </div>
                <div className={styles.header_element}>
                    <CButton onClick={addProduct}>Добавить продукт</CButton>
                </div>
                <div className={styles.header_element}>
                    <CButton onClick={deleteProduct}>Удалить продукт</CButton>
                </div>
                <div className={styles.header_element}>
                    <CButton onClick={logoutA}>Выйти</CButton>
                </div>
            </header>
            
            <div className={styles.catalog}>
                <div className={styles.chat}>
                    <Chat/>
                </div>
                {state.products.map((product, index) => {
                    return <CCatElement product={product} key={index} onClick={() => addToCart(product)} />
                })}
            </div>

            
        </div>
    )
}

export default CCatalogPage;