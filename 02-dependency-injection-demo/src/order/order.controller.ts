import { Controller, Get, Query } from '@nestjs/common';
import { NotificationService } from '../notification/notification.service';
@Controller('order')
export class OrderController {
    constructor(private readonly notificationService:NotificationService) {};
     
    @Get('confirm')
    sendConfirmation(@Query('phone') phone:string): string{
        return this.notificationService.sendSMS(phone,'Your order is confirmed');
    }
}
