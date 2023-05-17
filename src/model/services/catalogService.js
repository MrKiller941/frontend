import config from '../../view/configs/config.json'
import AuthService from './authService';

class CatalogService {
    static async getCatalog() {
        const res = await fetch(config.apiUrl + "/api/medicine", {
            method: "GET",
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
                login: AuthService.getLogin(),
                token: AuthService.getToken(),
            }
        });

        const json = await res.json();
        return json;
    }

    static async postProduct({ name, cost, count, img }) {
        const res = await fetch(config.apiUrl + "/api/medicine/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
                login: AuthService.getLogin(),
                token: AuthService.getToken(),
            },
            body: JSON.stringify({name, cost, count, img}),
        });

        return res.ok
    }

    static async deleteProduct({ name }) {
        const res = await fetch(config.apiUrl + "/api/medicine/delete", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
                login: AuthService.getLogin(),
                token: AuthService.getToken(),
            },
            body: JSON.stringify({name})
        });

        return res.ok

    }
}

export default CatalogService