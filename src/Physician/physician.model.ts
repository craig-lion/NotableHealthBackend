import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Physician {
  @Field(() => String)
  name!: string;

  @Field(() => String)
  email!: string;
}
