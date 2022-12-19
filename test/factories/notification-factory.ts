import {
  Notification,
  NotificationProps,
} from '@app/entities/notification/notification';
import { NotificationContent } from '@app/entities/notification/notification-content';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new NotificationContent('Nova solicitação de amizade!'),
    recipientId: 'recipient-2',
    ...override,
  });
}
