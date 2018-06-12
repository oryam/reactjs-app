import * as firebase from 'firebase';

const configTest = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
};
const configProd = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
};

const config = process.env.NODE_ENV === 'production' ? configProd : configTest;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const database = firebase.database();
export const auth = firebase.auth();

export default database;
