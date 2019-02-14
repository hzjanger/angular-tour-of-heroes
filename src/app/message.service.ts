import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  //存储消息
  message: string[] = [];

  constructor() { }

  /**
   * 添加消息
   * @param message
   */
  add(message: string) {
    this.message.push(message);
  }

  /**
   * 清除消息
   */
  clear() {
    this.message = [];
  }

}
