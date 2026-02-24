import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { NotificationFactory } from './factory/notification.factory';
import { EmailStrategy } from './strategies/email.strategy';
import { SmsStrategy } from './strategies/sms.strategy';
import { WhatsappStrategy } from './strategies/whatsapp.strategy';

@Module({
  imports: [ConfigModule],
  controllers: [NotificationController],
  providers: [
    NotificationService,
    NotificationFactory,
    EmailStrategy,
    SmsStrategy,
    WhatsappStrategy,
  ],
})
export class NotificationModule {}
