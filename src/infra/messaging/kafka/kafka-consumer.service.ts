import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
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
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
