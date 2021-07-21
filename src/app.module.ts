import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
import { join } from 'path';
import { AppointmentModule } from './Appointments/appointment.module';
import { PhysicianModule } from './Physician/physician.module';

@Module({
  imports: [
    AppointmentModule,
    PhysicianModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
