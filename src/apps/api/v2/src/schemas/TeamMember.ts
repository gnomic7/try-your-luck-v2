import { Field, ObjectType, InputType } from 'type-graphql';

@ObjectType()
export class TeamMember {
  @Field()
  id: string;

  @Field()
  fullName: string;

  @Field()
  score: number;

  @Field()
  status: boolean;
}

@InputType()
export class TeamMemberInput implements Partial<TeamMember> {
  @Field()
  fullName: string;

  @Field()
  id: string;
}
