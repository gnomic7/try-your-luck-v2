import { Query, Resolver, Mutation, Arg } from 'type-graphql'
import { TeamMember, TeamMemberInput } from '../schemas/TeamMember'

@Resolver((of) => TeamMember)
export class TeamMemberResolver {
  private teamMembers: TeamMember[] = []

  @Query((returns) => [TeamMember], { nullable: true })
  async getTeamMembers(): Promise<TeamMember[]> {
    return await this.teamMembers
  }

  @Mutation((returns) => TeamMember)
  async addTeamMember(
    @Arg('teamMemberInput') { fullName }: TeamMemberInput
  ): Promise<TeamMember> {
    const teamMember = {
      id: Math.random(), // not really unique
      fullName,
      score: 0,
      status: false,
    }

    await this.teamMembers.push(teamMember)
    return teamMember
  }
}