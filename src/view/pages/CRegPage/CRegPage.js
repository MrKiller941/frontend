import React, { useState } from 'react';
import CRegPanel from '../../components/Elements/CRegPanel/CRegPanel';
import CButton from "../../components/UI/CButton/CButton";
import AuthService from '../../../model/services/authService';
import { useNavigate } from 'react-router-dom';

function CRegPage() {
    const initialState = {
        password: "",
        login: "",
        message: ""
    }
    const [state, setState] = useState(initialState);
    const navigate = useNavigate();

    const toAuth = () => {
        navigate("/");
    }

    const register = async () => {
        const isOk = await AuthService.signUp(
            state.login,
            state.password
        )
        if (isOk) {
            toAuth()
        }

        setState({
            ...state,
            message: "Регистрация успешна."
        })
    }

    const onRegPanelChange = ({ password, login }) => {
        setState({
            ...state,
            password: password,
            login: login,
        })
    }

    return (
        <div align="center" className="rpage">
            <CRegPanel onChange={onRegPanelChange} />

            <CButton onClick={register}>Зарегистрироваться</CButton>
            <br />
            <CButton onClick={toAuth}>Назад</CButton>
            {state.message && <><br /><div style={{ color: "white" }}>{state.message}</div></>}
        </div>
    )
}

export default CRegPage;