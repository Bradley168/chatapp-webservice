import { Logger, UseFilters } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse
} from '@nestjs/websockets';

import { AuthGatewayMiddleware } from './auth-socket.middleware';
import { ExceptionFilter } from './socket.filter';

@WebSocketGateway({ namespace: 'auth', middlewares: [AuthGatewayMiddleware] })
@UseFilters(new ExceptionFilter())
export class AuthSocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server!: SocketIO.Server;
  private logger = new Logger('AuthGateway');

  handleConnection(socket: SocketIO.Socket) {
    this.logger.log(`Socket ID: ${socket.id} connected!`);
  }

  handleDisconnect(socket: SocketIO.Socket) {
    this.logger.log(`Socket ID: ${socket.id} disconnected!`);
  }

  @SubscribeMessage('welcome')
  onEvent(client: SocketIO.Client, data): WsResponse<string> {
    return { data: 'WELCOME AUTH', event: 'welcome' };
  }

  emit(uid: string[], eventName: string, body: any) {
    uid.forEach(x => this.server.to(x).emit(eventName, body));
  }
}
