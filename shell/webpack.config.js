const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'shell',

  remotes: {
    header: "header@http://localhost:4201/remoteEntry.js",
    dashboard: "dashboard@http://localhost:4202/remoteEntry.js",
    footer: "footer@http://localhost:4203/remoteEntry.js",
  },

  // shared: {
  //   ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  // },
  shared: {
    "@angular/core": { singleton: true, strictVersion: true },
    "@angular/common": { singleton: true, strictVersion: true },
    "@angular/router": { singleton: true, strictVersion: true },
    "bootstrap": { singleton: true, requiredVersion: false }
  }

});
