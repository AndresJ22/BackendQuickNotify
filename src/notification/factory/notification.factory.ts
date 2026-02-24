import { BadRequestException, Injectable } from '@nestjs/common';
import { EmailStrategy } from '../strategies/email.strategy';
import { NotificationStrategy } from '../strategies/notification.strategy';
import { SmsStrategy } from '../strategies/sms.strategy';
import { WhatsappStrategy } from '../strategies/whatsapp.strategy';

@Injectable()
export class NotificationFactory {
  constructor(
    private readonly emailStrategy: EmailStrategy,
    private readonly smsStrategy: SmsStrategy,
    private readonly whatsappStrategy: WhatsappStrategy,
  ) {}

  // Factory Pattern: centralizes strategy selection by notification type.
  getStrategy(type: string): NotificationStrategy {
    const normalizedType = type.toLowerCase();

    switch (normalizedType) {
      case 'email':
        return this.emailStrategy;
      case 'sms':
        return this.smsStrategy;
      case 'whatsapp':
        return this.whatsappStrategy;
      default:
        throw new BadRequestException(`Unsupported notification type: ${type}`);
    }
  }
}
