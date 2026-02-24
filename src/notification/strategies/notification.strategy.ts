export interface NotificationStrategy {
  send(message: string): Promise<string>;
}
