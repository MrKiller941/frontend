import React, { useState, useEffect } from 'react';
import CTextBar from '../../components/UI/CTextBar/CTextBar'
import CButton from '../../components/UI/CButton/CButton'
import CatalogService from '../../../model/services/catalogService';
import { useNavigate } from 'react-router-dom';
import "./CAddProdPage.css"
import { useListenerIsAuth } from '../../../redux/api';

function CAddProdPage() {
    const initialState = {
        name: "",
        cost: "",
        img: "",
        count: "",
        message: ""
    }
    const [state, setState] = useState(initialState);
    const navigate = useNavigate();

    const isAuth = useListenerIsAuth();

    useEffect(() => {
        if(!isAuth){
            navigate('/');
        }
    }, [isAuth])

    const addProduct = async () => {
        const isOk = await CatalogService.postProduct({
            name: state.name,
            cost: state.cost,
            img: state.img,
            count: state.count,
        })

        if (!isOk) {
            setState({
                ...state,
                message: "Ошибка добавления в каталог."
            })
            return
        }

        setState({
            ...state,
            message: "Продукт успешно добавлен в каталог."
        })
    }


    const back = () => {
        navigate("/catalog")
    }


    return (
        <ul className="panel">
            <li style={{color: 'white'}}>Название: <br /><CTextBar value={state.name} onChange={e => setState({...state, name: e.currentTarget.value })} /></li>
            <br />

            <li style={{color: 'white'}}>Стоимость:<br /><CTextBar value={state.cost} onChange={e => setState({...state, cost: e.currentTarget.value })} /></li>
            <br />

            <li style={{color: 'white'}}>Ссылка на изображение:<br /><CTextBar value={state.img} onChange={e => setState({...state, img: e.currentTarget.value })} /></li>
            <br />

            <li style={{color: 'white'}}>Количество:<br /><CTextBar value={state.count} onChange={e => setState({...state, count: e.currentTarget.value })} /></li>
            <br />
            <li style={{color: 'white'}}><CButton onClick={addProduct}>Добавить</CButton></li>
            <br />

            <li style={{color: 'white'}}><CButton onClick={back}>Назад</CButton></li>
            <div>{state.message && <><br />{state.message}</>}</div>
        </ul >
    )
}

export default CAddProdPage