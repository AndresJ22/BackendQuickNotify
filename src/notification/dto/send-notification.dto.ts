import { IsIn, IsNotEmpty, IsString } from 'class-validator';

export class SendNotificationDto {
  @IsString()
  @IsNotEmpty()
  @IsIn(['email', 'sms', 'whatsapp'])
  type: string;

  @IsString()
  @IsNotEmpty()
  message: string;
}
