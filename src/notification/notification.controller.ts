import { Body, Controller, Get, Post } from '@nestjs/common';
import { SendNotificationDto } from './dto/send-notification.dto';
import { NotificationService } from './notification.service';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post('send')
  async send(@Body() body: SendNotificationDto): Promise<{ result: string }> {
    const result = await this.notificationService.sendNotification(
      body.type,
      body.message,
    );

    return { result };
  }

  // Singleton Pattern endpoint
  @Get('stats')
  getStats(): { appName: string; version: string; notificationsSent: number } {
    return this.notificationService.getStats();
  }
}
