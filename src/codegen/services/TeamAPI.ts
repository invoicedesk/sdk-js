/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { APIResponse } from '../models/APIResponse';
import type { DeleteTeamMemberResponse } from '../models/DeleteTeamMemberResponse';
import type { InviteTeamMemberRequestBody } from '../models/InviteTeamMemberRequestBody';
import type { ListTeamMembersResponse } from '../models/ListTeamMembersResponse';
import type { ResendInviteRequestBody } from '../models/ResendInviteRequestBody';
import type { TeamInviteResponse } from '../models/TeamInviteResponse';
import type { UpdateTeamMemberRequestBody } from '../models/UpdateTeamMemberRequestBody';
import type { UpdateTeamMemberResponse } from '../models/UpdateTeamMemberResponse';

import type { BaseHttpRequest } from '../core/BaseHttpRequest';
import type { CancelablePromise } from '../core/CancelablePromise';

export class TeamAPI {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List Team Members
   * Get all team members in your account
   * @returns ListTeamMembersResponse
   * @throws ApiError
   */
  public listTeamMembers(): CancelablePromise<ListTeamMembersResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/team',
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Update Member Role
   * Update the role of an existing team member
   * @returns UpdateTeamMemberResponse
   * @throws ApiError
   */
  public updateTeamMemberRole({
    companyId,
    userId,
    requestBody,
  }: {
    /**
     * Company ID the team member belongs to
     */
    companyId: string,
    /**
     * User ID of the team member
     */
    userId: string,
    requestBody: UpdateTeamMemberRequestBody,
  }): CancelablePromise<UpdateTeamMemberResponse> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/team/{userId}/role',
      path: {
        'companyId': companyId,
        'userId': userId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Remove Team Member
   * Remove a member of the team.
   * @returns DeleteTeamMemberResponse
   * @throws ApiError
   */
  public removeTeamMember({
    companyId,
    userId,
  }: {
    /**
     * Company ID the team member belongs to
     */
    companyId: string,
    /**
     * User ID of the team member to remove
     */
    userId: string,
  }): CancelablePromise<DeleteTeamMemberResponse> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/team/{userId}',
      path: {
        'companyId': companyId,
        'userId': userId,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Invite Team Member
   * Invite a person to join your team. This operation sends an invite via email to the person.
   * @returns TeamInviteResponse
   * @throws ApiError
   */
  public inviteTeamMember({
    requestBody,
  }: {
    requestBody: InviteTeamMemberRequestBody,
  }): CancelablePromise<TeamInviteResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/team-invites',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * @returns any
   * @throws ApiError
   */
  public teamInvitesControllerAccept({
    token,
  }: {
    token: string,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/team-invites/accept-invite',
      query: {
        'token': token,
      },
    });
  }

  /**
   * Resend Invite
   * Resend an invite to the person you wish to have on your team
   * @returns APIResponse
   * @throws ApiError
   */
  public resendInvite({
    requestBody,
  }: {
    requestBody: ResendInviteRequestBody,
  }): CancelablePromise<APIResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/team-invites/resend',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        404: `Resource not found`,
      },
    });
  }

}
