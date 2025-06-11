/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type InviteTeamMemberRequestBody = {
  /**
   * Email address to send the invite to
   */
  email: string;
  /**
   * The ID of the role this member will have
   */
  roleId: string;
  /**
   * The ID of the company this member will be invited to
   */
  companyIds: Array<string>;
  /**
   * The IDs of the projects this member will have access to
   */
  projectIds: Array<string>;
};

