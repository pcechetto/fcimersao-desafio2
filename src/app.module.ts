import { Module } from '@nestjs/common';
import { AssetsController } from './controllers/assets.controller';
import { OrdersController } from './controllers/orders.controller';

@Module({
  imports: [],
  controllers: [AssetsController, OrdersController],
})
export class AppModule {}
