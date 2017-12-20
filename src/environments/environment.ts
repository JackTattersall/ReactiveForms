// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBnaLxdWlr2-U9J-_6T5Bb_x_aZiYA4SZ0',
    authDomain: 'lycettes-demo.firebaseapp.com',
    databaseURL: 'https://lycettes-demo.firebaseio.com',
    projectId: 'lycettes-demo',
    storageBucket: '',
    messagingSenderId: '730708645881'
  }
};
