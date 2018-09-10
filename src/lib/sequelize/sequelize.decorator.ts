import { Inject } from '@nestjs/common';

import { SequelizeToken } from './sequelize.constant';

export const InjectSequelize = () => Inject(SequelizeToken);
