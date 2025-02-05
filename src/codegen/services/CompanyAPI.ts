/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateCompanyData } from '../models/CreateCompanyData';
import type { CreateCompanyResponse } from '../models/CreateCompanyResponse';
import type { GetCompanyQueryParams } from '../models/GetCompanyQueryParams';
import type { GetCompanyResponse } from '../models/GetCompanyResponse';
import type { ListCompaniesResponse } from '../models/ListCompaniesResponse';
import type { SuccessResponse } from '../models/SuccessResponse';
import type { UpdateCompanyData } from '../models/UpdateCompanyData';
import type { UpdateCompanyResponse } from '../models/UpdateCompanyResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CompanyAPI {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List companies
   * List all companies that belong to an account.
   * @returns ListCompaniesResponse
   * @throws ApiError
   */
  public listCompanies(): CancelablePromise<ListCompaniesResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/companies',
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Add Company
   * Add a new company to an existing account
   * @returns CreateCompanyResponse
   * @throws ApiError
   */
  public createCompany({
    formData,
  }: {
    formData: CreateCompanyData,
  }): CancelablePromise<CreateCompanyResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/companies',
      formData: formData,
      mediaType: 'multipart/form-data',
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Update Company
   * Update an existing company details
   * @returns UpdateCompanyResponse
   * @throws ApiError
   */
  public updateCompany({
    companyId,
    formData,
  }: {
    /**
     * ID of the company to update
     */
    companyId: string,
    formData: UpdateCompanyData,
  }): CancelablePromise<UpdateCompanyResponse> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/companies/{companyId}',
      path: {
        'companyId': companyId,
      },
      formData: formData,
      mediaType: 'multipart/form-data',
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Fetch details of a company by ID
   * @returns GetCompanyResponse
   * @throws ApiError
   */
  public getCompany({
    companyId,
    include,
  }: {
    /**
     * ID of the company to fetch
     */
    companyId: string,
    /**
     * Comma delimited string to include related company data
     */
    include?: GetCompanyQueryParams,
  }): CancelablePromise<GetCompanyResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/companies/{companyId}',
      path: {
        'companyId': companyId,
      },
      query: {
        'include': include,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * Delete a comany
   * Deletes a company and all it's related data
   * @returns SuccessResponse
   * @throws ApiError
   */
  public deleteCompany({
    companyId,
  }: {
    /**
     * ID of the company
     */
    companyId: string,
  }): CancelablePromise<SuccessResponse> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/companies/{companyId}',
      path: {
        'companyId': companyId,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

}
