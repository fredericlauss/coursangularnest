import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { ChatService } from 'src/app.service';

@WebSocketGateway(3001)
export class ChatGateway {
  @WebSocketServer() server: Server;

  constructor(private chatService: ChatService) {}

  @SubscribeMessage('message')
  async handleMessage(
    @MessageBody() data: { sender: string; centent: string },
  ) {
    const message = await this.chatService.createMessage(
      data.sender,
      data.centent,
    );
    this.server.emit('message', message);
  }
}
