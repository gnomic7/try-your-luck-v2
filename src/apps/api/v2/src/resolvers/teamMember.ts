import { isUUID } from 'class-validator';
import { Query, Resolver, Mutation, Arg, Subscription } from 'type-graphql';
import { v4 as uuidv4 } from 'uuid';

import { TeamMember, TeamMemberInput } from '../schemas/TeamMember';
import getCollection from '../utils/db';

const TEAM_MEMBER_COLLECTION = 'teamMember';
@Resolver((of) => TeamMember)
export class TeamMemberResolver {
  private teamMembers: TeamMember[] = [];
  @Query((returns) => [TeamMember], { nullable: true })
  async getTeamMembers(): Promise<TeamMember[]> {
    const teamMemberCollection = await getCollection(TEAM_MEMBER_COLLECTION);
    return (await teamMemberCollection.find({}).toArray())
      .map((member) => ({
        id: member.id || uuidv4(),
        fullName: member.fullName || '',
        score: member.score || 0,
        status: member.status || false,
      }))
      .sort((a, b) => b.score - a.score);
  }

  @Mutation((returns) => TeamMember)
  async addTeamMember(
    @Arg('teamMemberInput') fullName: string,
  ): Promise<TeamMember> {
    console.log({ fullName });
    const teamMemberCollection = await getCollection(TEAM_MEMBER_COLLECTION);
    const teamMember = {
      id: uuidv4(),
      fullName,
      score: 0,
      status: false,
    };
    const response = await teamMemberCollection.findOne<TeamMember>({
      fullName,
    });
    if (!response || !response.fullName) {
      await teamMemberCollection.insertOne(teamMember);
    }

    return teamMember;
  }

  @Mutation((returns) => TeamMember)
  async dropTeamMember(
    @Arg('teamMemberInput') id: string,
  ): Promise<{ id: string }> {
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
