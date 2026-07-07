import { Controller, Get, Query } from '@nestjs/common';
import { NotificationService } from '../notification/notification.service';

@Controller('user')
export class UserController {
    constructor(private readonly notificationService:NotificationService) {};

    @Get('welcome')
    sendWelcome(@Query('email') email:string):string{
        return this.notificationService.sendEmail(email,'Welcome to App!!');
    }
}
