import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4201';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'BookStore',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44308',
    redirectUri: baseUrl,
    clientId: 'BookStore_App',
    responseType: 'code',
    scope: 'offline_access BookStore',
  },
  apis: {
    default: {
      url: 'https://localhost:44308',
      rootNamespace: 'Acme.BookStore',
    },
  },
} as Environment;

// import { Environment } from '@abp/ng.core';

// const baseUrl = 'http://10.8.105.1:4201';

// export const environment = {
//   production: false,
//   application: {
//     baseUrl,
//     name: 'BookStore',
//     logoUrl: '',
//   },
//   oAuthConfig: {
//     issuer: 'http://10.8.105.1:80',
//     redirectUri: baseUrl,
//     clientId: 'BookStore_App',
//     responseType: 'code',
//     scope: 'offline_access BookStore',
//   },
//   apis: {
//     default: {
//       url: 'http://10.8.105.1:80',
//       rootNamespace: 'Acme.BookStore',
//     },
//   },
// } as Environment;

