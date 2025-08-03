import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log(`Application is running on: `);
    return 'Hello World!';
  }
}
