/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectTeamMember } from './ProjectTeamMember';

export type GetProjectTeamMembersResponse = {
  /**
   * Indicates whether the operation was successful or not
   */
  success: boolean;
  /**
   * List of team members assigned to the project
   */
  data: Array<ProjectTeamMember>;
  /**
   * If the operation was not successful, holds the deatils of errors
   */
  errors: Array<string>;
};

