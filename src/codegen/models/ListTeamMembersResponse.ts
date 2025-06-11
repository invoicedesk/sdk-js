/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TeamMember } from './TeamMember';

export type ListTeamMembersResponse = {
  /**
   * Indicates whether the operation was successful or not
   */
  success: boolean;
  /**
   * List of team members
   */
  data: Array<TeamMember>;
  /**
   * If the operation was not successful, holds the deatils of errors
   */
  errors: Array<string>;
};

