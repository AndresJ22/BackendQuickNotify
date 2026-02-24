import { Injectable } from '@nestjs/common';
import { ConfigService } from './config/config.service';
import { NotificationFactory } from './factory/notification.factory';

@Injectable()
export class NotificationService {
  constructor(
    private readonly notificationFactory: NotificationFactory,
    private readonly configService: ConfigService,
  ) {}

  async sendNotification(type: string, message: string): Promise<string> {
    const strategy = this.notificationFactory.getStrategy(type);

    // Strategy Pattern: behavior is delegated to the selected strategy.
    const result = await strategy.send(message);

    console.log(
      `${this.configService.appName} processed notification: ${type}`,
    );
    return result;
  }
}
