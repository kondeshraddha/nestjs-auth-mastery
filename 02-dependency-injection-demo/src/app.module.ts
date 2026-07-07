import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationService } from './notification/notification.service';
import { UserController } from './user/user.controller';
import { OrderController } from './order/order.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, OrderController],
  providers: [AppService, NotificationService],
})
export class AppModule {}
