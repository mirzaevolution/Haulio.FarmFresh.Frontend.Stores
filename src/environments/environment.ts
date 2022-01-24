// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  idp:{
    baseAddress: 'https://localhost:44310',
    clientId: 'FarmFresh.Frontend',
    clientSecret: 'c829df0c-bf98-44c5-8c92-fbeab7039ac4',
    scope: 'openid profile email offline_access role store_services customer_services',
    grantType: 'code',
  },
  apiGateway: {
    baseAddress: 'https://localhost:44320'
  },
  storesApiPath: {
     getCategories: '/api/v1/stores/categories',
     getOrderHistories: '/api/v1/stores/orderhistories',
     getProductById: '/api/v1/stores/products/',
     getAllProducts: '/api/v1/stores/products',
     postProduct: '/api/v1/stores/products',
     putProduct: '/api/v1/stores/products',
     deleteProductById : '/api/v1/stores/products/'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
