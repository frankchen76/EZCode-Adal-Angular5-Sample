import {IEZCodeAdalConfig} from 'ezcode-adal-angular5/lib';

export const ezcodeAdalConfig: IEZCodeAdalConfig={
    tenant: '[TENANTID]',
    clientId: '[clientid]',
    redirectUri: window.location.href.substring(0, window.location.href.lastIndexOf("/")+1), //window.location.origin + '/',
    postLogoutRedirectUri: window.location.origin + '/',
    endpoints: {
        "[apiurl]":"api-resourceid"
    }
};