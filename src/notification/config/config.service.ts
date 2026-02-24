import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  // Singleton Pattern: NestJS services are singletons by default,
  // so a single shared ConfigService instance is used across the app.
  // All injected references point to the SAME instance, sharing state.

  private readonly appName = 'QuickNotify';
  private readonly version = '1.0.0';
  private readonly defaultRetryAttempts = 3;
  private notificationCount = 0;

  getAppName(): string {
    return this.appName;
  }

  getVersion(): string {
    return this.version;
  }

  getRetryAttempts(): number {
    return this.defaultRetryAttempts;
  }

  // Demonstrates shared mutable state across the app:
  // Every service that injects ConfigService shares this counter.
  incrementNotificationCount(): number {
    this.notificationCount++;
    return this.notificationCount;
  }

  getNotificationCount(): number {
    return this.notificationCount;
  }

  getAppInfo(): { appName: string; version: string; notificationsSent: number } {
    return {
      appName: this.appName,
      version: this.version,
      notificationsSent: this.notificationCount,
    };
  }
}
