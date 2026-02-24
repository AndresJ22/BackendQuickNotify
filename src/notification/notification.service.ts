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

    // Singleton Pattern: this counter is shared across the entire app.
    const count = this.configService.incrementNotificationCount();

    console.log(
      `[${this.configService.getAppName()} v${this.configService.getVersion()}] ` +
      `Notification #${count} processed: ${type}`,
    );
    return result;
  }

  getStats(): { appName: string; version: string; notificationsSent: number } {
    return this.configService.getAppInfo();
  }
}
