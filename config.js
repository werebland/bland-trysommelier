import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

if (!firebase.apps.length) {
  var app = firebase.initializeApp({
      apiKey: process.env.NODE_ENV,
      authDomain: "bland-sommelier.firebaseapp.com",
      databaseURL: "https://bland-sommelier.firebaseio.com",
      projectId: "bland-sommelier",
      storageBucket: "bland-sommelier.appspot.com",
  });
  app.settings = { timestampsInSnapshots: true }
} else {
  var app = firebase
}

var db = firebase.firestore(app);
var settings = { };
db.settings(settings);

console.log(process.env.NODE_ENV);
console.log(process.env.FIREBASE_API);

var base = Rebase.createClass(db);

export default base
