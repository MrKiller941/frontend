import React, { useState, useEffect } from 'react';
import CRegPanel from '../../components/Elements/CRegPanel/CRegPanel';
import CButton from "../../components/UI/CButton/CButton";
import { useNavigate } from 'react-router-dom';
import { useListenerIsAuth, useListenerIsRegistrationStatus, useRegistration } from '../../../redux/api';

function CRegPage() {
    const initialState = {
        password: "",
        login: "",
    }
    const [state, setState] = useState(initialState);
    const navigate = useNavigate();

    const registerA = useRegistration();
    const registrationStatus = useListenerIsRegistrationStatus();
    const isAuth = useListenerIsAuth();

    useEffect(() => {
        if(isAuth){
            navigate('/catalog');
        }
    }, [isAuth])

    return (
        <div align="center" className="rpage">
            <CRegPanel onChange={({ password, login }) => {
                setState({
                    ...state,
                    password: password,
                    login: login,
                })
            }} />
            <CButton onClick={() => registerA(state.login, state.password)}>Зарегистрироваться</CButton>
            <br />
            <CButton onClick={() => navigate('/')}>Назад</CButton>
            {registrationStatus == false && <><br /><div style={{ color: "white" }}>{"Ошибка регистрации"}</div></>}
        </div>
    )
}

export default CRegPage;