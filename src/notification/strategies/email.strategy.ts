import { Injectable } from '@nestjs/common';
import { NotificationStrategy } from './notification.strategy';

@Injectable()
export class EmailStrategy implements NotificationStrategy {
  async send(message: string): Promise<string> {
    await this.simulateExternalProvider();
    console.log(`Simulating EMAIL provider: ${message}`);
    return `Email sent successfully: ${message}`;
  }

  private async simulateExternalProvider(): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
}
