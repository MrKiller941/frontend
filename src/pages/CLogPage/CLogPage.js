import React, { useEffect, useState } from 'react';
import { useNavigate, withRouter } from 'react-router-dom'
import CLogPanel from "../../components/Elements/CLogPanel/CLogPanel";
import CButton from "../../components/UI/CButton/CButton";
import { UserContext } from '../../contexts/user';
import AuthService from '../../services/authService';
import { useAuth, useIsAuth } from '../../redux/api';
/*
function CLogPage(props){

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const isAuth = useIsAuth();
    const auth = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(isAuth === true){
            navigate("/catalog");
        }
    }, [])

    return (
        <div align="center" className="lpage">
            <CLogPanel onChange={({login, password}) => {
                setLogin(login);
                setPassword(password);
            }} />
            <CButton onClick={() => useAuth(login, password)}>Войти</CButton>
            <br />
            <CButton onClick={() => useNavigate('/register')}>Регистрация</CButton>
        </div>
    )
}
*/

class CLogPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            password: "",
            login: ""
        }
        this.auth = this.auth.bind(this);
       // this.isAuth = useIsAuth();
      //  this.authService = useAuth();
    }

    auth(){
        
        console.log(this.state.login);
        AuthService.signIn({
            login: this.state.login,
            password: this.state.password
        })
        .then(() => {
            this.context.setUser({
                login: this.state.login,
                password: this.state.password
            })
            this.props.history.push("/catalog")
        })
        
       //this.authService(this.state.login, this.state.password);
    }


    toRegistration = () => {
        this.props.history.push("/register")
    }

    onLogPanelChange = ({ password, login }) => {
        this.setState({
            password,
            login
        })
    }

    render() {
        return (
            <div align="center" className="lpage">
                <CLogPanel onChange={this.onLogPanelChange} />
                <CButton onClick={this.auth}>Войти</CButton>
                <br />
                <CButton onClick={this.toRegistration}>Регистрация</CButton>
            </div>
        )
    }
}


CLogPage.contextType = UserContext

export default withRouter(CLogPage)
//export default CLogPage