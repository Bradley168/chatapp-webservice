import { GatewayMiddleware } from '@nestjs/websockets';

// import { JWTPayload } from './auth.interfaces';
// import { decodeJWT } from './auth.resolver';

export class AuthGatewayMiddleware implements GatewayMiddleware {
  resolve() {
    return async (socket: SocketIO.Socket, next: (err?: Error) => void): Promise<void> => {
      const accessToken = socket.handshake.query.accessToken;
      console.log('accessToken', accessToken);
      // const { JWT_SECRET = 'Define Me Plz' } = process.env;
      // const jwtDecoded = await decodeJWT<JWTPayload>(accessToken, JWT_SECRET);
      // if (!jwtDecoded) return next(new Error('Something wrong with your connection'));

      // /* const userData = await User.findById(jwtDecoded.id, {
      //   attributes: ['uid']
      // });
      // if (!userData) return next(new Error('Something wrong with your connection')); */

      // next(new Error('Something wrong with your connection'));

      socket.join(accessToken);
      next();
    };
  }
}
