import { Field, ObjectType, InputType } from 'type-graphql';

@ObjectType()
export class TeamMember {
  @Field()
  id: string = '';

  @Field({ description: 'First name of the member' })
  firstName: string = '';

  @Field({ description: 'Last name of the member' })
  lastName: string = '';

  @Field({ description: 'Score of the game persisted for the member' })
  score: number = 0;

  @Field({
    description:
      'When a member is out for a few weeks or intentionally set as inactive - the value is set to false.',
  })
  status: boolean = false;

  @Field({ description: 'Password to access the try your luck game' })
  password?: string = '';

  @Field({
    description: 'Username is usually created at the registration time.',
  })
  userName?: string = '';
}

@InputType()
export class TeamMemberInput implements Partial<TeamMember> {
  @Field()
  firstName?: string = '';

  @Field()
  lastName?: string = '';

  @Field({ description: 'ID for a member' })
  id: string = '';

  @Field()
  score?: number = 0;
}

@ObjectType()
export class LoggedInMember implements Partial<TeamMember> {
  @Field()
  id: string = '';

  @Field()
  accessToken?: string = '';
}

@ObjectType()
export class Context {
  @Field({ description: 'JWT token' })
  accessToken: string = '';
}

@InputType()
export class UpdatableMemberProps {
  @Field({ description: 'First name of the member' })
  firstName: string = '';

  @Field({ description: 'Last name of the member' })
  lastName: string = '';

  @Field({ description: 'Username for the logged in member' })
  userName: string = '';

  @Field({ description: 'Score of the game persisted for the member' })
  score: number = 0;

  @Field({
    description:
      'When a member is out for a few weeks or intentionally set as inactive - the value is set to false.',
  })
  status: boolean = false;
}
