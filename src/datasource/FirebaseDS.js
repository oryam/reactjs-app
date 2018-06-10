import * as firebase from 'firebase';

const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
};
firebase.initializeApp(config);

export const database = firebase.database();

export default database;
