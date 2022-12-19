import { Notification } from '@app/entities/notification/notification';

export class NotificationViewModel {
  static toHTTP(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.contentValue,
      category: notification.category,
      recipientId: notification.recipientId,
    };
  }
}
