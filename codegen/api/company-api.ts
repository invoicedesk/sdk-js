/* tslint:disable */
/* eslint-disable */
/**
 * Invoice Desk API Documentation
 * Official API documentation for Invoice Desk
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// URLSearchParams not necessarily used
// @ts-ignore
import { URL, URLSearchParams } from 'url';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { CreateCompanyResponse } from '../models';
// @ts-ignore
import { GetCompanyResponse } from '../models';
// @ts-ignore
import { ListCompaniesResponse } from '../models';
// @ts-ignore
import { Payload } from '../models';
// @ts-ignore
import { SuccessResponse } from '../models';
// @ts-ignore
import { UpdateTaxRegistrationRequestBody } from '../models';
// @ts-ignore
import { UpdateTaxRegistrationResponse } from '../models';
/**
 * CompanyApi - axios parameter creator
 * @export
 */
export const CompanyApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Add a new company to an existing account
         * @summary Add Company
         * @param {Payload} payload 
         * @param {string} accountId Account ID for which to create a company
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCompany: async (payload: Payload, accountId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'payload' is not null or undefined
            assertParamExists('createCompany', 'payload', payload)
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('createCompany', 'accountId', accountId)
            const localVarPath = `/accounts/{accountId}/companies`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(payload, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes a company and all it\'s related data
         * @summary Delete a comany
         * @param {string} accountId ID of the account in which the company belongs
         * @param {string} companyId ID of the company
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCompany: async (accountId: string, companyId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('deleteCompany', 'accountId', accountId)
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('deleteCompany', 'companyId', companyId)
            const localVarPath = `/accounts/{accountId}/companies/{companyId}`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)))
                .replace(`{${"companyId"}}`, encodeURIComponent(String(companyId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Fetch details of a company by ID
         * @param {string} accountId ID of the account in which the company belongs
         * @param {string} companyId ID of the company to fetch
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCompany: async (accountId: string, companyId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('getCompany', 'accountId', accountId)
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('getCompany', 'companyId', companyId)
            const localVarPath = `/accounts/{accountId}/companies/{companyId}`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)))
                .replace(`{${"companyId"}}`, encodeURIComponent(String(companyId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List all companies that belong to an account.
         * @summary List companies
         * @param {string} accountId Account ID for which to list companies
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCompanies: async (accountId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('listCompanies', 'accountId', accountId)
            const localVarPath = `/accounts/{accountId}/companies`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *        Upload image of your company\'s logo. This will be shown on invoices.       Only image/jpeg,image/png are supported with a max file size of 2MB     
         * @summary Update comany logo
         * @param {string} accountId ID of the account in which the company belongs
         * @param {string} companyId ID of the company
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateLogo: async (accountId: string, companyId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('updateLogo', 'accountId', accountId)
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('updateLogo', 'companyId', companyId)
            const localVarPath = `/accounts/{accountId}/companies/{companyId}/logo`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)))
                .replace(`{${"companyId"}}`, encodeURIComponent(String(companyId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update tax registration of the company
         * @param {UpdateTaxRegistrationRequestBody} updateTaxRegistrationRequestBody 
         * @param {string} accountId Account ID for which to create a company
         * @param {string} companyId Company ID for for which the tax registrations has to be added
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTaxRegistration: async (updateTaxRegistrationRequestBody: UpdateTaxRegistrationRequestBody, accountId: string, companyId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'updateTaxRegistrationRequestBody' is not null or undefined
            assertParamExists('updateTaxRegistration', 'updateTaxRegistrationRequestBody', updateTaxRegistrationRequestBody)
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('updateTaxRegistration', 'accountId', accountId)
            // verify required parameter 'companyId' is not null or undefined
            assertParamExists('updateTaxRegistration', 'companyId', companyId)
            const localVarPath = `/accounts/{accountId}/companies/{companyId}/tax-registration`
                .replace(`{${"accountId"}}`, encodeURIComponent(String(accountId)))
                .replace(`{${"companyId"}}`, encodeURIComponent(String(companyId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateTaxRegistrationRequestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CompanyApi - functional programming interface
 * @export
 */
export const CompanyApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CompanyApiAxiosParamCreator(configuration)
    return {
        /**
         * Add a new company to an existing account
         * @summary Add Company
         * @param {Payload} payload 
         * @param {string} accountId Account ID for which to create a company
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createCompany(payload: Payload, accountId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateCompanyResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createCompany(payload, accountId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes a company and all it\'s related data
         * @summary Delete a comany
         * @param {string} accountId ID of the account in which the company belongs
         * @param {string} companyId ID of the company
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteCompany(accountId: string, companyId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteCompany(accountId, companyId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Fetch details of a company by ID
         * @param {string} accountId ID of the account in which the company belongs
         * @param {string} companyId ID of the company to fetch
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCompany(accountId: string, companyId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetCompanyResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCompany(accountId, companyId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List all companies that belong to an account.
         * @summary List companies
         * @param {string} accountId Account ID for which to list companies
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listCompanies(accountId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListCompaniesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listCompanies(accountId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         *        Upload image of your company\'s logo. This will be shown on invoices.       Only image/jpeg,image/png are supported with a max file size of 2MB     
         * @summary Update comany logo
         * @param {string} accountId ID of the account in which the company belongs
         * @param {string} companyId ID of the company
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateLogo(accountId: string, companyId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateLogo(accountId, companyId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update tax registration of the company
         * @param {UpdateTaxRegistrationRequestBody} updateTaxRegistrationRequestBody 
         * @param {string} accountId Account ID for which to create a company
         * @param {string} companyId Company ID for for which the tax registrations has to be added
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateTaxRegistration(updateTaxRegistrationRequestBody: UpdateTaxRegistrationRequestBody, accountId: string, companyId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpdateTaxRegistrationResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateTaxRegistration(updateTaxRegistrationRequestBody, accountId, companyId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CompanyApi - factory interface
 * @export
 */
export const CompanyApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CompanyApiFp(configuration)
    return {
        /**
         * Add a new company to an existing account
         * @summary Add Company
         * @param {CompanyApiCreateCompanyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCompany(requestParameters: CompanyApiCreateCompanyRequest, options?: AxiosRequestConfig): AxiosPromise<CreateCompanyResponse> {
            return localVarFp.createCompany(requestParameters.payload, requestParameters.accountId, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a company and all it\'s related data
         * @summary Delete a comany
         * @param {CompanyApiDeleteCompanyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCompany(requestParameters: CompanyApiDeleteCompanyRequest, options?: AxiosRequestConfig): AxiosPromise<SuccessResponse> {
            return localVarFp.deleteCompany(requestParameters.accountId, requestParameters.companyId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Fetch details of a company by ID
         * @param {CompanyApiGetCompanyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCompany(requestParameters: CompanyApiGetCompanyRequest, options?: AxiosRequestConfig): AxiosPromise<GetCompanyResponse> {
            return localVarFp.getCompany(requestParameters.accountId, requestParameters.companyId, options).then((request) => request(axios, basePath));
        },
        /**
         * List all companies that belong to an account.
         * @summary List companies
         * @param {CompanyApiListCompaniesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCompanies(requestParameters: CompanyApiListCompaniesRequest, options?: AxiosRequestConfig): AxiosPromise<ListCompaniesResponse> {
            return localVarFp.listCompanies(requestParameters.accountId, options).then((request) => request(axios, basePath));
        },
        /**
         *        Upload image of your company\'s logo. This will be shown on invoices.       Only image/jpeg,image/png are supported with a max file size of 2MB     
         * @summary Update comany logo
         * @param {CompanyApiUpdateLogoRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateLogo(requestParameters: CompanyApiUpdateLogoRequest, options?: AxiosRequestConfig): AxiosPromise<SuccessResponse> {
            return localVarFp.updateLogo(requestParameters.accountId, requestParameters.companyId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update tax registration of the company
         * @param {CompanyApiUpdateTaxRegistrationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTaxRegistration(requestParameters: CompanyApiUpdateTaxRegistrationRequest, options?: AxiosRequestConfig): AxiosPromise<UpdateTaxRegistrationResponse> {
            return localVarFp.updateTaxRegistration(requestParameters.updateTaxRegistrationRequestBody, requestParameters.accountId, requestParameters.companyId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createCompany operation in CompanyApi.
 * @export
 * @interface CompanyApiCreateCompanyRequest
 */
export interface CompanyApiCreateCompanyRequest {
    /**
     * 
     * @type {Payload}
     * @memberof CompanyApiCreateCompany
     */
    readonly payload: Payload

    /**
     * Account ID for which to create a company
     * @type {string}
     * @memberof CompanyApiCreateCompany
     */
    readonly accountId: string
}

/**
 * Request parameters for deleteCompany operation in CompanyApi.
 * @export
 * @interface CompanyApiDeleteCompanyRequest
 */
export interface CompanyApiDeleteCompanyRequest {
    /**
     * ID of the account in which the company belongs
     * @type {string}
     * @memberof CompanyApiDeleteCompany
     */
    readonly accountId: string

    /**
     * ID of the company
     * @type {string}
     * @memberof CompanyApiDeleteCompany
     */
    readonly companyId: string
}

/**
 * Request parameters for getCompany operation in CompanyApi.
 * @export
 * @interface CompanyApiGetCompanyRequest
 */
export interface CompanyApiGetCompanyRequest {
    /**
     * ID of the account in which the company belongs
     * @type {string}
     * @memberof CompanyApiGetCompany
     */
    readonly accountId: string

    /**
     * ID of the company to fetch
     * @type {string}
     * @memberof CompanyApiGetCompany
     */
    readonly companyId: string
}

/**
 * Request parameters for listCompanies operation in CompanyApi.
 * @export
 * @interface CompanyApiListCompaniesRequest
 */
export interface CompanyApiListCompaniesRequest {
    /**
     * Account ID for which to list companies
     * @type {string}
     * @memberof CompanyApiListCompanies
     */
    readonly accountId: string
}

/**
 * Request parameters for updateLogo operation in CompanyApi.
 * @export
 * @interface CompanyApiUpdateLogoRequest
 */
export interface CompanyApiUpdateLogoRequest {
    /**
     * ID of the account in which the company belongs
     * @type {string}
     * @memberof CompanyApiUpdateLogo
     */
    readonly accountId: string

    /**
     * ID of the company
     * @type {string}
     * @memberof CompanyApiUpdateLogo
     */
    readonly companyId: string
}

/**
 * Request parameters for updateTaxRegistration operation in CompanyApi.
 * @export
 * @interface CompanyApiUpdateTaxRegistrationRequest
 */
export interface CompanyApiUpdateTaxRegistrationRequest {
    /**
     * 
     * @type {UpdateTaxRegistrationRequestBody}
     * @memberof CompanyApiUpdateTaxRegistration
     */
    readonly updateTaxRegistrationRequestBody: UpdateTaxRegistrationRequestBody

    /**
     * Account ID for which to create a company
     * @type {string}
     * @memberof CompanyApiUpdateTaxRegistration
     */
    readonly accountId: string

    /**
     * Company ID for for which the tax registrations has to be added
     * @type {string}
     * @memberof CompanyApiUpdateTaxRegistration
     */
    readonly companyId: string
}

/**
 * CompanyApi - object-oriented interface
 * @export
 * @class CompanyApi
 * @extends {BaseAPI}
 */
export class CompanyApi extends BaseAPI {
    /**
     * Add a new company to an existing account
     * @summary Add Company
     * @param {CompanyApiCreateCompanyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompanyApi
     */
    public createCompany(requestParameters: CompanyApiCreateCompanyRequest, options?: AxiosRequestConfig) {
        return CompanyApiFp(this.configuration).createCompany(requestParameters.payload, requestParameters.accountId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a company and all it\'s related data
     * @summary Delete a comany
     * @param {CompanyApiDeleteCompanyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompanyApi
     */
    public deleteCompany(requestParameters: CompanyApiDeleteCompanyRequest, options?: AxiosRequestConfig) {
        return CompanyApiFp(this.configuration).deleteCompany(requestParameters.accountId, requestParameters.companyId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Fetch details of a company by ID
     * @param {CompanyApiGetCompanyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompanyApi
     */
    public getCompany(requestParameters: CompanyApiGetCompanyRequest, options?: AxiosRequestConfig) {
        return CompanyApiFp(this.configuration).getCompany(requestParameters.accountId, requestParameters.companyId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List all companies that belong to an account.
     * @summary List companies
     * @param {CompanyApiListCompaniesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompanyApi
     */
    public listCompanies(requestParameters: CompanyApiListCompaniesRequest, options?: AxiosRequestConfig) {
        return CompanyApiFp(this.configuration).listCompanies(requestParameters.accountId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     *        Upload image of your company\'s logo. This will be shown on invoices.       Only image/jpeg,image/png are supported with a max file size of 2MB     
     * @summary Update comany logo
     * @param {CompanyApiUpdateLogoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompanyApi
     */
    public updateLogo(requestParameters: CompanyApiUpdateLogoRequest, options?: AxiosRequestConfig) {
        return CompanyApiFp(this.configuration).updateLogo(requestParameters.accountId, requestParameters.companyId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update tax registration of the company
     * @param {CompanyApiUpdateTaxRegistrationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompanyApi
     */
    public updateTaxRegistration(requestParameters: CompanyApiUpdateTaxRegistrationRequest, options?: AxiosRequestConfig) {
        return CompanyApiFp(this.configuration).updateTaxRegistration(requestParameters.updateTaxRegistrationRequestBody, requestParameters.accountId, requestParameters.companyId, options).then((request) => request(this.axios, this.basePath));
    }
}
