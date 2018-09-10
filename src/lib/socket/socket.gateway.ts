import { Logger, UseFilters } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsException,
  WsResponse
} from '@nestjs/websockets';

import { ExceptionFilter } from './socket.filter';

@WebSocketGateway({ namespace: 'app' })
@UseFilters(new ExceptionFilter())
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server!: SocketIO.Server;
  private logger = new Logger('AppGateway');

  handleConnection(socket: SocketIO.Socket) {
    this.logger.log(`Socket ID: ${socket.id} connected!`);
  }

  handleDisconnect(socket: SocketIO.Socket) {
    this.logger.log(`Socket ID: ${socket.id} disconnected!`);
  }

  @SubscribeMessage('welcome')
  onEvent(client: SocketIO.Client, data): WsResponse<string> {
    throw new WsException('xxxx');
    return { data: 'WELCOME APP', event: 'welcome' };
  }

  emit(eventName: string, body: any) {
    this.server.emit(eventName, body);
  }
}
