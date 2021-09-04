import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../_services/socket.service';

@Component({
  selector: 'app-websocket',
  templateUrl: './websocket.component.html',
  styleUrls: ['./websocket.component.scss']
})
export class WebsocketComponent implements OnInit {

  constructor(
    private socketService: SocketService
  ) { }

  ngOnInit(): void {
    // this.socketService.setupConnection()
  }

  handleClick() {
    this.socketService.sendMessage()
  }

}
