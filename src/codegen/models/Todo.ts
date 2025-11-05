/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { User } from './User';

export type Todo = {
  /**
   * ID of the todo
   */
  id: string;
  /**
   * Title of the todo
   */
  title: string;
  /**
   * Detailed description of the todo
   */
  description?: string;
  /**
   * Creator ID
   */
  creatorId: string;
  /**
   * Assignee ID
   */
  assigneeId?: string;
  /**
   * Due date
   */
  dueDate?: string;
  /**
   * Priority of the todo
   */
  priority: string;
  /**
   * Is the todo completed?
   */
  isComplete: boolean;
  /**
   * When the todo was completed
   */
  completedAt?: string;
  /**
   * Creation time
   */
  createdAt: string;
  /**
   * Last update time
   */
  updatedAt: string;
  /**
   * Deleted at timestamp
   */
  deletedAt?: string;
  creator?: User;
  assignee?: User;
  /**
   * Tags
   */
  tags: Array<Record<string, any>>;
  comments: Array<string>;
};

