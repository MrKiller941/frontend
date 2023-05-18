import config from '../../view/configs/config.json'

class AuthService {
    static async signIn(login, password) {
        const response = await fetch(config.apiUrl + "/api/user/auth", {
            method: "POST",
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify({login, password}),
        });

        if(response.ok){
            await response.json().then((token) => {
                AuthService.save(login, token);
                AuthService.setPassword(password);
            });
            return;
        } else {
            return Promise.reject();
        }
    }

    static async signUp(login, password) {
        const response = await fetch(config.apiUrl + "/api/user/reg", {
            method: "POST",
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify({login, password}),
        });

        console.log(response);

        if(response.ok){
            // console.log(response.json())
            response.json().then((token) => {
                AuthService.save(login, token);
                AuthService.setPassword(password);
            });
            return;
        } else {
            return Promise.reject();
        }
    }

    static save(login, token){
        localStorage.setItem('login', login);
        localStorage.setItem('token', token);
    }

    static setPassword(password){
        localStorage.setItem('password', password);
    }

    static getPassword(){
        return localStorage.getItem('password');
    }

    static getLogin(){
        return localStorage.getItem('login');
    }

    static getToken(){
        return localStorage.getItem('token');
    }

    static logout(){
        localStorage.removeItem('login');
        localStorage.removeItem('token');
    }
}

export default AuthService