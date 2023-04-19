import config from '../configs/config.json'

class AuthService {
    static async signIn({ login, password }) {
       const res = await fetch(config.apiUrl + "/api/auth", {
            method: "POST",
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify([login, password]),
        });
        if(res.ok){
            await res.json().then((token) => {
                AuthService.save(login, token);
            })
            return;
        } else {
            return Promise.reject();
        }
    }

    static async signUp({ login, password }) {
       const res = await fetch(config.apiUrl + "/api/reg", {
            method: "POST",
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify([login, password])
       });
       if(res.ok){
            res.json().then((token) => {
                AuthService.save(login, token);
            })
            return;
        } else {
            return Promise.reject();
        }
    }

    static save(login, token){
        localStorage.setItem('login', login);
        localStorage.setItem('token', token);
    }

    static getLogin(){
        return localStorage.getItem('login');
    }

    static getToken(){
        return localStorage.getItem('token');
    }
}

export default AuthService