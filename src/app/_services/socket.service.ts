import { Injectable } from '@angular/core';
import { io } from "socket.io-client";


@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket: any;

  constructor() { }

  setupConnection() {
    this.socket = io('http://localhost:3000')
  }

  sendMessage() {
    this.socket.emit("hello", "Hello")
  }

}
