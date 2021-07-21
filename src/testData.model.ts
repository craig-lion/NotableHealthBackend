import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class TestObject {
  @Field(() => String)
  data!: string;
}
