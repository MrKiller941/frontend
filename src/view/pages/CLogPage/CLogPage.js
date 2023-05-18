import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import CLogPanel from "../../components/Elements/CLogPanel/CLogPanel";
import CButton from "../../components/UI/CButton/CButton";
import { useListenerIsAuth, useListenerIsLoginStatus, useLogin } from '../../../redux/api';


function CLogPage() {
    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [login, setLogin] = useState("");

    const loginA = useLogin();
    const isAuth = useListenerIsAuth();
    const loginStatus = useListenerIsLoginStatus();

    useEffect(() => {
        if(isAuth){
            navigate('/catalog');
        }
    }, [isAuth])


    return (
        <div align="center" className="lpage">
            <CLogPanel onChange={ ({ password, login }) => {
                setPassword(password);
                setLogin(login);
            }} />
            <CButton onClick={() => loginA(login, password)}>Войти</CButton>
            <br />
            <CButton onClick={() => navigate("/register")}>Регистрация</CButton>
            {loginStatus == false && <><br /><span style={{ color: "white" }}>{"Ошибка авторизации"}</span></>}
        </div>
    )
}

export default CLogPage