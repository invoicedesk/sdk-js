/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Task } from './Task';

export type ProjectTeamMember = {
  /**
   * ID of the user
   */
  id: string;
  /**
   * Team member's username
   */
  username: string;
  /**
   * Team member's first name
   */
  firstName: string;
  /**
   * Team member's last name
   */
  lastName: string;
  /**
   * Team member's title
   */
  title: string;
  /**
   * Team member's designation in the team
   */
  designation: string;
  /**
   * Team member's profile image URL
   */
  imageURL?: string;
  /**
   * Tasks owned by the team member
   */
  ownedTasks?: Array<Task>;
  /**
   * Tasks assigned to the team member
   */
  assignedTasks?: Array<Task>;
};

