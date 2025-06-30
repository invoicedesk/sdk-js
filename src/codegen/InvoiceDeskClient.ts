/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';

import { AccountAPI } from './services/AccountAPI';
import { ClientAPI } from './services/ClientAPI';
import { CompanyAPI } from './services/CompanyAPI';
import { CompanySettingsAPI } from './services/CompanySettingsAPI';
import { DashboardAPI } from './services/DashboardAPI';
import { InvoiceAPI } from './services/InvoiceAPI';
import { InvoicePaymentsAPI } from './services/InvoicePaymentsAPI';
import { MediaAPI } from './services/MediaAPI';
import { ProductAPI } from './services/ProductAPI';
import { ProjectAPI } from './services/ProjectAPI';
import { RoleAPI } from './services/RoleAPI';
import { StaticDataAPI } from './services/StaticDataAPI';
import { SubscriptionAPI } from './services/SubscriptionAPI';
import { SubscriptionV2API } from './services/SubscriptionV2API';
import { TaggablesAPI } from './services/TaggablesAPI';
import { TagsAPI } from './services/TagsAPI';
import { TeamAPI } from './services/TeamAPI';
import { TimesheetAPI } from './services/TimesheetAPI';
import { UserProfileAPI } from './services/UserProfileAPI';
import { WebhooksAPI } from './services/WebhooksAPI';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class InvoiceDeskClient {

  public readonly account: AccountAPI;
  public readonly client: ClientAPI;
  public readonly company: CompanyAPI;
  public readonly companySettings: CompanySettingsAPI;
  public readonly dashboard: DashboardAPI;
  public readonly invoice: InvoiceAPI;
  public readonly invoicePayments: InvoicePaymentsAPI;
  public readonly media: MediaAPI;
  public readonly product: ProductAPI;
  public readonly project: ProjectAPI;
  public readonly role: RoleAPI;
  public readonly staticData: StaticDataAPI;
  public readonly subscription: SubscriptionAPI;
  public readonly subscriptionV2: SubscriptionV2API;
  public readonly taggables: TaggablesAPI;
  public readonly tags: TagsAPI;
  public readonly team: TeamAPI;
  public readonly timesheet: TimesheetAPI;
  public readonly userProfile: UserProfileAPI;
  public readonly webhooks: WebhooksAPI;

  public readonly request: BaseHttpRequest;

  constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
    this.request = new HttpRequest({
      BASE: config?.BASE ?? '',
      VERSION: config?.VERSION ?? '1.0.0',
      WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
      CREDENTIALS: config?.CREDENTIALS ?? 'include',
      TOKEN: config?.TOKEN,
      USERNAME: config?.USERNAME,
      PASSWORD: config?.PASSWORD,
      HEADERS: config?.HEADERS,
      ENCODE_PATH: config?.ENCODE_PATH,
    });

    this.account = new AccountAPI(this.request);
    this.client = new ClientAPI(this.request);
    this.company = new CompanyAPI(this.request);
    this.companySettings = new CompanySettingsAPI(this.request);
    this.dashboard = new DashboardAPI(this.request);
    this.invoice = new InvoiceAPI(this.request);
    this.invoicePayments = new InvoicePaymentsAPI(this.request);
    this.media = new MediaAPI(this.request);
    this.product = new ProductAPI(this.request);
    this.project = new ProjectAPI(this.request);
    this.role = new RoleAPI(this.request);
    this.staticData = new StaticDataAPI(this.request);
    this.subscription = new SubscriptionAPI(this.request);
    this.subscriptionV2 = new SubscriptionV2API(this.request);
    this.taggables = new TaggablesAPI(this.request);
    this.tags = new TagsAPI(this.request);
    this.team = new TeamAPI(this.request);
    this.timesheet = new TimesheetAPI(this.request);
    this.userProfile = new UserProfileAPI(this.request);
    this.webhooks = new WebhooksAPI(this.request);
  }
}

