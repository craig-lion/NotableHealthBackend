import { Resolver, Query } from '@nestjs/graphql';
import { AppService } from './app.service';
import { TestObject } from './testData.model';

@Resolver(() => TestObject)
export class AppResolver {
  constructor(private appService: AppService) {}
  @Query(() => TestObject, { name: 'testObj' })
  getTestObject() {
    const testObj: TestObject = {
      data: 'test',
    };
    return testObj;
  }

  @Query(() => String, { name: 'test' })
  test() {
    return 'this single feat of software engineering prowess single handedly proves I am the greatest coder everrrrrrrr';
  }
}
