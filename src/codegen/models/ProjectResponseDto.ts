/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClientResponseDto } from './ClientResponseDto';

export type ProjectResponseDto = {
  /**
   * Project ID
   */
  id: string;
  /**
   * Project name
   */
  name: string;
  /**
   * Associated client
   */
  client: ClientResponseDto;
};

