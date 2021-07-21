import { Resolver, Query } from '@nestjs/graphql';
import { Physician } from './physician.model';

@Resolver(() => Physician)
export class PhysicianResolver {
  @Query(() => [Physician], { name: 'physicians' })
  getPhysicians() {
    const Physician1: Physician = {
      name: 'Algernop Kreiger',
      email: 'akreiger@isis.spy',
    };
    const Physician2: Physician = {
      name: 'TotallyNot AClone',
      email: 'notaclone@isis.spy',
    };
    const Physician3: Physician = {
      name: 'Lucky Yates',
      email: 'lyates@isis.spy',
    };
    return [Physician1, Physician2, Physician3];
  }
}
