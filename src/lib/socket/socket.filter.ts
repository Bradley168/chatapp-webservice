import { ArgumentsHost, Catch, WsExceptionFilter } from '@nestjs/common';
import { WsException } from '@nestjs/websockets';

@Catch(WsException)
export class ExceptionFilter implements WsExceptionFilter {
  catch(exception: WsException, host: ArgumentsHost) {
    const socket = host.switchToWs().getClient<SocketIO.Socket>();
    // const data = host.switchToWs().getData();
    // console.log('exception', exception);
    // console.log('data', data);

    socket.emit('exception', {
      status: 'error',
      message: `It's a message from the exception filter`
    });
  }
}
