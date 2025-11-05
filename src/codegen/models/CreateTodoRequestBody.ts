/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateTodoRequestBody = {
  /**
   * Title of the todo
   */
  title: string;
  /**
   * Detailed description of the todo
   */
  description?: string;
  /**
   * ID of the team member assigned to this task
   */
  assigneeId?: string;
  /**
   * Due date for the todo
   */
  dueDate?: string;
  /**
   * Priority level of the todo
   */
  priority?: CreateTodoRequestBody.priority;
  /**
   * Array of tag IDs to apply to this todo
   */
  tagIds?: Array<string>;
};

export namespace CreateTodoRequestBody {

  /**
   * Priority level of the todo
   */
  export enum priority {
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high',
    URGENT = 'urgent',
  }


}

