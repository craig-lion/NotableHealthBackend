import { Resolver, Query } from '@nestjs/graphql';
import { Appointment } from './appointments.model';

@Resolver(() => Appointment)
export class AppointmentResolver {
  @Query(() => [Appointment], { name: 'appointments' })
  getAppointments() {
    const Appointment1: Appointment = {
      id: 1,
      patient: 'Sterling Archer',
      time: '9:00AM',
      kind: 'Follow-Up',
    };
    const Appointment2: Appointment = {
      id: 2,
      patient: 'Lana Kane',
      time: '10:00AM',
      kind: 'Follow-Up',
    };
    const Appointment3: Appointment = {
      id: 3,
      patient: 'Cyril Figgis',
      time: '11:00AM',
      kind: 'New-Patient',
    };
    const Appointment4: Appointment = {
      id: 4,
      patient: 'Mallory Archer',
      time: '12:00PM',
      kind: 'New-Patient',
    };
    const Appointment5: Appointment = {
      id: 5,
      patient: 'Ray Gilette',
      time: '1:00PM',
      kind: 'Follow-Up',
    };
    const Appointment6: Appointment = {
      id: 6,
      patient: 'Pam Pouvey',
      time: '2:00PM',
      kind: 'Follow-Up',
    };
    const Appointment7: Appointment = {
      id: 7,
      patient: 'Cheryl/Carol Tunt',
      time: '3:00PM',
      kind: 'Follow-Up',
    };
    return [
      Appointment1,
      Appointment2,
      Appointment3,
      Appointment4,
      Appointment5,
      Appointment6,
      Appointment7,
    ];
  }
}
