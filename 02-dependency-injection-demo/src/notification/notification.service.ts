import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService {
    sendEmail(to:string,message:string): string{
        console.log(`Send email to ${to}:${message}`);
        return `Send email to ${to}`;
    }

    sendSMS(to:string,message:string){
        console.log(`send SMS to ${to}:${message}`);
        return `send SMS to ${to}`;
    }
}
