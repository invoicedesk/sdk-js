/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CommentResponse } from './CommentResponse';

export type CreateCommentResponse = {
  /**
   * Indicates whether the operation was successful or not
   */
  success: boolean;
  /**
   * Created comment
   */
  data: CommentResponse;
  /**
   * If the operation was not successful, holds the deatils of errors
   */
  errors: Array<string>;
};

