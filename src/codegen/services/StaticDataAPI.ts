/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListCitiesResponse } from '../models/ListCitiesResponse';
import type { ListCountriesResponse } from '../models/ListCountriesResponse';
import type { ListCurrenciesResponse } from '../models/ListCurrenciesResponse';
import type { ListStatesResponse } from '../models/ListStatesResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class StaticDataAPI {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List currencies
   * Get list of all available currencies.
   * @returns ListCurrenciesResponse
   * @throws ApiError
   */
  public listCurrencies(): CancelablePromise<ListCurrenciesResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/static-data/currencies',
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * List countries
   * Get list of all available countries.
   * @returns ListCountriesResponse
   * @throws ApiError
   */
  public listCountries(): CancelablePromise<ListCountriesResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/static-data/countries',
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * List states
   * Get list of states for a specific country.
   * @returns ListStatesResponse
   * @throws ApiError
   */
  public listStates({
    countryId,
  }: {
    /**
     * ID of the country
     */
    countryId: number,
  }): CancelablePromise<ListStatesResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/static-data/countries/{countryId}/states',
      path: {
        'countryId': countryId,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

  /**
   * List cities
   * Get list of cities for a specific state.
   * @returns ListCitiesResponse
   * @throws ApiError
   */
  public listCities({
    stateId,
  }: {
    /**
     * ID of the state
     */
    stateId: number,
  }): CancelablePromise<ListCitiesResponse> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/static-data/states/{stateId}/cities',
      path: {
        'stateId': stateId,
      },
      errors: {
        403: `Unauthorized`,
        404: `Resource not found`,
      },
    });
  }

}
