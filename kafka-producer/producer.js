import { randomUUID } from 'node:crypto';
import { Kafka } from 'kafkajs';

async function bootstrap() {
  const kafka = new Kafka({
    clientId: 'notification',
    brokers: ['renewing-jaybird-14978-us1-kafka.upstash.io:9092'],
    sasl: {
      mechanism: 'scram-sha-256',
      username:
        'cmVuZXdpbmctamF5YmlyZC0xNDk3OCSedv5as2dBZ30_hvobbf3930iR6G4-Eu0',
      password:
        '3ysx79yra-e7yV2xkqSoShmuOvd6fEAqkrgjLjWQ15k8tsyLXHPDvNg36Vag1S-5wkN3QA==',
    },
    ssl: true,
  });

  const producer = kafka.producer();

  await producer.connect();

  await producer.send({
    topic: 'notification.send-notification',
    messages: [
      {
        value: JSON.stringify({
          content: 'Nova solicitação de amizade',
          category: 'social',
          recipientId: randomUUID(),
        }),
      },
    ],
  });
}

bootstrap();
