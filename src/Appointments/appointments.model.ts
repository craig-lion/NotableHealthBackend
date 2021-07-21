import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Appointment {
  @Field(() => Int)
  id!: number;

  @Field(() => String)
  patient!: string;

  @Field(() => String)
  time!: string;

  @Field(() => String)
  kind!: 'New-Patient' | 'Follow-Up';
}
