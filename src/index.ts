import { NeedfullAPI as APIClient, OpenAPI } from "./codegen";
import { HttpClient } from "./http-client";

export type Config = {
  /** API host address.
   * 
   * @default https://api.invoicedesk.app
  */
  host?: string;

  /**
   * API version.
   * 
   * @default v1
   */
  version?: string;

  /**
   * API key for accessing Invoice Desk's APIs.
   *
   * @type {string}
   */
  apiKey: string;
};

export class NeedfullAPI {
  private client: APIClient;

  constructor({
    host = 'https://api.invoicedesk.app',
    apiKey,
  }: Config) {
    this.client = new APIClient({
      BASE: `${host}`,
    }, HttpClient);
    OpenAPI.TOKEN = apiKey;
  }

  get clients() {
    return this.client.client;
  }

  get companies() {
    return this.client.company
  }

  get products() {
    return this.client.product;
  }

  get invoices() {
    return this.client.invoice;
  }

  get profile() {
    return this.client.userProfile;
  }

  get projects() {
    return this.client.project;
  }

  get accounts() {
    return this.client.account;
  }

  get teams() {
    return this.client.team;
  }

  get tags() {
    return this.client.tags;
  }

  /**
   * Set the auth token to be used for all requests.
   *
   * @param {string} token
   * @throws {Error} if token is empty
   */
  setAuthToken(token: string) {
    if (token.trim() === '') {
      throw new Error('Token cannot be empty');
    }

    OpenAPI.TOKEN = token;
  }
}

export * from "./codegen/index";
