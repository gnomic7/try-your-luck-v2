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
import { createPasswordHash, generateAccessToken } from '../utils/auth';

const TEAM_MEMBER_COLLECTION = 'teamMember';
@Resolver((of) => TeamMember)
export class TeamMemberResolver {
  private teamMembers: TeamMember[] = [];
  @Query((returns) => [TeamMember], { nullable: true })
  async getTeamMembers(@Ctx() user: Context): Promise<TeamMember[]> {
    const teamMemberCollection = await getCollection(TEAM_MEMBER_COLLECTION);
    return (await teamMemberCollection.find({}).toArray())
      .map((member) => ({
        id: member.id || uuidv4(),
        firstName: member.firstName || '',
        lastName: member.lastName || '',
        displayName: `${member.firstName} ${member.lastName}`,
        score: member.score || 0,
        status: member.status || false,
      }))
      .sort((a, b) => b.score - a.score);
  }

  @Mutation((returns) => LoggedInMember, { nullable: true })
  async teamMemberLogin(
    @Arg('userName') userName: string,
    @Arg('password') password: string,
  ): Promise<{
    id: string;
    accessToken: string;
    score: number;
    userName: string;
    firstName: string;
    lastName: string;
    displayName: string;
  }> {
    try {
      console.log('What is here...');
      const teamMemberCollection = await getCollection(TEAM_MEMBER_COLLECTION);
      const response = await teamMemberCollection.findOne<TeamMember>({
        userName,
      });
      if (response && response.password) {
        if (createPasswordHash(password) === response.password) {
          const {
            id = '',
            userName = '',
            firstName = '',
            lastName = '',
            displayName = '',
            score = 0,
          } = response;
          // Sign an jwt token and return
          return {
            id,
            userName,
            firstName,
            lastName,
            displayName: `${firstName} ${lastName}`,
            score,
            accessToken: generateAccessToken({
              id,
              userName,
            }),
          };
        }
        throw new Error('Wrong password');
      }
      throw new Error('Invalid login');
    } catch (err) {
      console.log(err);
      throw err;
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
      displayName: `${firstName} ${lastName}`,
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
  async updateTeamMemberScore(
    @Arg('id') id: string,
    @Arg('score') score: number,
    @Ctx() { accessToken }: Context,
  ): Promise<TeamMember | {}> {
    const teamMemberCollection = await getCollection(TEAM_MEMBER_COLLECTION);
    await teamMemberCollection.updateOne({ id }, { $set: { score } });

    const member = await teamMemberCollection.findOne<TeamMember>({
      id,
    });
    return {
      ...member,
      displayName:
        member?.displayName || `${member?.firstName} ${member?.lastName}`,
    };
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
