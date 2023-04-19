import AuthService from "./authService";
import Store from "./Store";

const API_URL = "ws://localhost:8080/medic/chat";

class ChatService extends Store {
    sendMessage(text){
        console.log(text);
        this.connection.send(text);
    }
    _getMessage(message){
        this._emit(JSON.parse(message));
    }
    close(){
        this.connection.close();
    }
    open(){
        this.username = AuthService.getLogin();
        this.connection = new WebSocket(API_URL + "/" + this.username);
        this.connection.onmessage = (event) => {
            this._getMessage(event.data);
        };
    }
}

class ChatServiceFactory {
    static _chat = null;

    static _createInstance() {
        return new ChatService();
    }

    static createInstance() {
        if (ChatServiceFactory._chat === null) {
            ChatServiceFactory._chat = ChatServiceFactory._createInstance();
        }
        return ChatServiceFactory._chat;
    }
}

export default ChatServiceFactory;