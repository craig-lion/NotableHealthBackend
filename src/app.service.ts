import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getSnap(): string {
    return 'Osnap it works!';
  }
}
