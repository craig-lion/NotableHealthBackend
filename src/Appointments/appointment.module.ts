import { Module } from '@nestjs/common';
import { AppointmentResolver } from './appointments.resolver';

@Module({
  providers: [AppointmentResolver],
})
export class AppointmentModule {}
