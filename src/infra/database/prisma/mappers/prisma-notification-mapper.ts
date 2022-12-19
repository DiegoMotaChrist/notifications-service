import { Notification as RawNotification } from '@prisma/client';
import { Notification } from '@app/entities/notification/notification';
import { NotificationContent } from '@app/entities/notification/notification-content';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.contentValue,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createAt: notification.createdAt,
    };
  }

  static toDomain(raw: RawNotification): Notification {
    return new Notification(
      {
        category: raw.category,
        content: new NotificationContent(raw.content),
        recipientId: raw.recipientId,
        readAt: raw.readAt,
        canceledAt: raw.canceledAt,
        createdAt: raw.createAt,
      },
      raw.id,
    );
  }
}
