import { Component, OnInit } from '@angular/core';
import { PagamentosService } from './components/services/pagamentos.service';
import { Notification } from './components/models/venda.model';
import { User } from './components/models/user.model';
//import { WebsocketService } from './components/services/websocket.service';
//import { AuthService } from './components/services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 

  title = 'vipverse';
  UserId: number = 1;
  //webSocketAPI: WebsocketService;
  greeting: any;
  name: string;

  /*ngOnInit(): void {
    this.webSocketAPI = new WebsocketService(this);
  }

  connect(){
    this.webSocketAPI._connect(this.UserId);
  }

  disconnect(){
    this.webSocketAPI._disconnect();
  }

  sendMessage(){
    this.webSocketAPI._send(this.name);
  }

  handleMessage(message: any){
    this.greeting = message;
   // this.authenticationService.mensagem(message);
  }

  handleUsersChange(userid: any, logged: boolean){
           //Altera user id
           //Conecta ou desconecta ao websocket
  }*/

}

