# Redis Client

## 📋 Requirement

[Redis](https://github.com/NodeRedis/node_redis) required three `.env` param.

- `REDIS_HOST`: Redis host.
- `REDIS_PORT`: Redis port.
- `REDIS_AUTH_PASS`: Redis auth pass.

## 🛠️ Usage

- To use Redis module, import `RedisModule` into `ApplicationModule`.
- To inject Redis into your service, use `InjectRedisClient`.

```ts
// src/app.module.ts
import { RedisModule } from './lib/redis';

@Module({
  imports: [ApiModule, ConfigModule, RedisModule]
})
export class ApplicationModule {}

// firebase-admin.service.ts
import { RedisClient } from 'redis';
import { InjectRedisClient } from '../../lib/redis';

@Injectable()
export class FirebaseAdminService {
  constructor(@InjectRedisClient() private readonly redis: RedisClient) {}
}
```
