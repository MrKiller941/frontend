import React from 'react';
import { withRouter } from 'react-router-dom'
import CRegPanel from '../../components/Elements/CRegPanel/CRegPanel';
import CButton from "../../components/UI/CButton/CButton";
import AuthService from '../../services/authService';

class CRegPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            password: "",
            login: ""
        }
        this.register = this.register.bind(this);
    }

    toAuth = () => {
        this.props.history.push("/")
    }

    register(){
        AuthService.signUp({
            login: this.state.login,
            password: this.state.password
        })
        .then(() => {
            this.props.history.push("/");
        })
    }

    onRegPanelChange = ({ password, login }) => {
        this.setState({
            password,
            login
        })
    }

    render() {
        return (
            <div align="center" className="rpage">
                <CRegPanel onChange={this.onRegPanelChange} />

                <CButton onClick={this.register}>Отправить данные</CButton>
                <br />
                <CButton onClick={this.toAuth}>Назад</CButton>
            </div>
        )
    }
}

export default withRouter(CRegPage)