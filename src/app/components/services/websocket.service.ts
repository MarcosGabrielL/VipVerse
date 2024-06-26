import { Injectable } from '@angular/core';
// @ts-ignore
import * as Stomp from 'stompjs';
// @ts-ignore
import SockJS from 'sockjs-client';
import { AppComponent } from '../../app.component';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {


    webSocketEndPoint: string = 'http://localhost:8080/ws';
    topicnotifications: string = "/topic/notifications/";
    topicEvento: string = "/topic/evento/";
    topicChat: string = "/topic/chat/";
    stompClient: any;
    appComponent: AppComponent;

    constructor(appComponent: AppComponent){
        this.appComponent = appComponent;
    }

    _connect(UserId:any) {
        console.log("Initialize WebSocket Connection");
        let ws = new SockJS(this.webSocketEndPoint);
        this.stompClient = Stomp.over(ws);
        const _this = this;
        _this.stompClient.connect({}, function (frame: any) {
            _this.stompClient.subscribe(_this.topicnotifications + UserId, function (sdkEvent: any) {
                _this.onMessageReceived(sdkEvent);
            });
            //_this.stompClient.reconnect_delay = 2000;
        }, this.errorCallBack);
    };

    _disconnect() {
        if (this.stompClient !== null) {
            this.stompClient.disconnect();
        }
        console.log("Disconnected");
    }

    // on error, schedule a reconnection attempt
    errorCallBack(error: any) {
        console.log("errorCallBack -> " + error)
        setTimeout(() => {
            //this._connect();
        }, 5000);
    }

 /**
  * Send message to sever via web socket
  * @param {*} message 
  */
    _send(message: any) {
        console.log("calling logout api via web socket");
        this.stompClient.send("/app/hello", {}, JSON.stringify(message));
    }

    onMessageReceived(message: any) {
        console.log("Message Recieved from Server :: " + message);
        this.appComponent.handleMessage(JSON.stringify(message.body));
    }



}
