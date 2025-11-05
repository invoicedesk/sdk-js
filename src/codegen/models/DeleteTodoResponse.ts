/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Todo } from './Todo';

export type DeleteTodoResponse = {
  /**
   * Indicates whether the operation was successful or not
   */
  success: boolean;
  /**
   * Deleted todo details
   */
  data: Todo;
  /**
   * If the operation was not successful, holds the deatils of errors
   */
  errors: Array<string>;
};

