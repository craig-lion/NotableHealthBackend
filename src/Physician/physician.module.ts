import { Module } from '@nestjs/common';
import { PhysicianResolver } from './physician.resolver';

@Module({
  providers: [PhysicianResolver],
})
export class PhysicianModule {}
