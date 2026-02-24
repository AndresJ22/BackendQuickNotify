import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  // Singleton Pattern: NestJS services are singletons by default,
  // so a single shared ConfigService instance is used across the app.
  appName = 'QuickNotify';
}
