import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];
  lastMessage: string;

  add(message: string): void {
    this.messages.push(message);
    this.lastMessage = message;
  }

  clear(): void {
    this.messages = [];
  }
}
