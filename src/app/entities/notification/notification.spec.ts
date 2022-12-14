import { Notification } from './notification';
import { NotificationContent } from './notification-content';

describe('Notification', () => {
  it('it should be able to create a notification', () => {
    const content = new Notification({
      content: new NotificationContent('Nova solicitação de amizade'),
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(content).toBeTruthy();
  });
});
