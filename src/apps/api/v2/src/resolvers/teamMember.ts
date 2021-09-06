import { isUUID } from 'class-validator';
import {
  Query,
  Resolver,
  Mutation,
  Arg,
  Ctx,
  Subscription,
} from 'type-graphql';
import { v4 as uuidv4 } from 'uuid';

import {
  TeamMember,
  TeamMemberInput,
  LoggedInMember,
  UpdatableMemberProps,
  Context,
} from '../schemas/TeamMember';
import getCollection from '../utils/db';
import { createPasswordHash } from '../utils/auth';

const TEAM_MEMBER_COLLECTION = 'teamMember';
@Resolver((of) => TeamMember)
export class TeamMemberResolver {
  private teamMembers: TeamMember[] = [];
  @Query((returns) => [TeamMember], { nullable: true })
  async getTeamMembers(@Ctx() { accessToken }: Context): Promise<TeamMember[]> {
    const teamMemberCollection = await getCollection(TEAM_MEMBER_COLLECTION);
    return (await teamMemberCollection.find({}).toArray())
      .map((member) => ({
        id: member.id || uuidv4(),
        firstName: member.firstName || '',
        lastName: member.lastName || '',
        score: member.score || 0,
        status: member.status || false,
      }))
      .sort((a, b) => b.score - a.score);
  }

  @Mutation((returns) => TeamMember)
  async teamMemberLogin(
    @Arg('userName') userName: string,
    @Arg('password') password: string,
  ): Promise<LoggedInMember | void> {
    try {
      const teamMemberCollection = await getCollection(TEAM_MEMBER_COLLECTION);
      const response = await teamMemberCollection.findOne<TeamMember>({
        userName,
      });
      if (response && response.password) {
        if (createPasswordHash(password) === response.password) {
          return response;
        }
        throw new Error('Wrong password');
      }
      console.log(response);
      throw new Error('Invalid login');
    } catch (err) {
      console.log(err);
    }
  }

  @Mutation((returns) => TeamMember)
  async addTeamMember(
    @Arg('firstName') firstName: string,
    @Arg('lastName') lastName: string,
    @Arg('userName') userName: string,
    @Arg('password') password: string,
  ): Promise<TeamMember> {
    const teamMemberCollection = await getCollection(TEAM_MEMBER_COLLECTION);
    const teamMember = {
      id: uuidv4(),
      firstName,
      lastName,
      score: 0,
      userName,
      password: createPasswordHash(password),
      status: false,
    };
    const response = await teamMemberCollection.findOne<TeamMember>({
      userName,
    });
    if (!response || !response.userName) {
      await teamMemberCollection.insertOne(teamMember);
    }

    return teamMember;
  }

  @Mutation((returns) => TeamMember)
  async dropTeamMember(@Arg('id') id: string): Promise<{ id: string }> {
    const teamMemberCollection = await getCollection(TEAM_MEMBER_COLLECTION);
    const response = await teamMemberCollection.findOne<TeamMember>({
      id,
    });
    if (response && response.id) {
      await teamMemberCollection.deleteOne({ id });
      return response;
    }

    return { id: '' };
  }

  @Mutation((returns) => TeamMember)
  async updateTeamMember(
    @Arg('memberObj') memberObj: UpdatableMemberProps,
    @Ctx() { accessToken }: Context,
  ): Promise<TeamMember | {}> {
    const { userName, ...otherProps } = memberObj;
    const teamMemberCollection = await getCollection(TEAM_MEMBER_COLLECTION);
    await teamMemberCollection.updateOne({ userName }, { $set: otherProps });

    return (
      (await teamMemberCollection.findOne<TeamMember>({
        userName,
      })) || {}
    );
  }

  // @Subscription({ topics: 'memberAdded' })
  // async memberAdded(): Promise<{ id: string }> {
  //   const teamMemberCollection = await getCollection(TEAM_MEMBER_COLLECTION);
  //   const response = await teamMemberCollection.findOne<TeamMember>({
  //     id,
  //   });
  //   if (response && response.id) {
  //     await teamMemberCollection.deleteOne({ id });
  //     return response;
  //   }

  //   return { id: '' };
  // }
}
