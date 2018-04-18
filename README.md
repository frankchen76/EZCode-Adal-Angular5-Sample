# EZCodeAdalAngular5

This sample is to showcase how to use [ezcode-adal-angular5-sample][1] library. [ezcode-adal-angular5-sample][1] is a component to secure your Angular 5 application by using adal.js library and Azure AD.

This sample demonstrated how to use this [ezcode-adal-angular5-sample][1] to communicate MS Graph API and any 3rd party API secured by Azure AD. 

## Setup
* Clone the git repository.  
* Create a Azure AD App (Web app/Web API) with the following configurations:
  * Configure Azure AD App to use implicit authentication flow by update manifest. 
  * Configure redirect url to http://localhost:4200 which is your local webparck server address.
* Create a adal configuration file ezcodeadalconfig.ts under service folder and update your tenant id, clientId to your Azure AD App configuration. If you want to call 3rd party API secured by Azure AD, make sure you enter the correct Web API url and Resource Id.
```typescript
import {IEZCodeAdalConfig} from 'ezcode-adal-angular5/lib/IEZCodeAdalConfig';

export const ezcodeAdalConfigLocal: IEZCodeAdalConfig={
    tenant: '[your tenant name/id]',
    clientId: '[your client id]',
    redirectUri: window.location.href.substring(0, window.location.href.lastIndexOf("/")+1), 
    postLogoutRedirectUri: window.location.origin + '/',
    endpoints: {
        'https://graph.microsoft.com/v1.0/me': 'https://graph.microsoft.com',
        '[webapi url]': '[webapi resource id]'

    }
};
```
* run `ng server --open`. the application should be opened in your browser 

## Screenshot
![alt text](https://public.dm.files.1drv.com/y4maciR4b07TLoQLlEQCi3doLxcDNsFJQbg2a0zGKWWRFJQvN0WWLRGMcVBJFkzLSRdikkCkjG1unDYsYk2cMhRe39-5U1vs8-U9M342TpxkX6vYQy2qZ-o5bgE-1hdH_6k1Mm-JFVxquu09bbYyYVgN_cmrH8sVXeWWWfRZe2uEdHmJlQWuKO1ukGH1Ytv9ZZZ0kIKgTnzn-0ZxKGaqFvtSg/ezcode-adal-angular5-sample.jpg?psid=1)


[1]:https://github.com/frankchen76/EZCode-Adal-Angular5-Sample

