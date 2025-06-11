/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InvitationDetail } from './InvitationDetail';
import type { RoleDetail } from './RoleDetail';
import type { User } from './User';

export type TeamMember = {
  /**
   * Information about the team member
   */
  user: User;
  /**
   * Name of the role
   */
  role: RoleDetail;
  /**
   * Invite details
   */
  invitation: InvitationDetail;
  /**
   * When the membership was created
   */
  createdAt: string;
};

