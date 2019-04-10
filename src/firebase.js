import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const config = {
  apiKey: "AIzaSyBDTnYPnPeM5G8tJTYDsstxGoJZlXZD9Kg",
  authDomain: "football-team-14b07.firebaseapp.com",
  databaseURL: "https://football-team-14b07.firebaseio.com",
  projectId: "football-team-14b07",
  storageBucket: "football-team-14b07.appspot.com",
  messagingSenderId: "865075647290"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');


export {
  firebase,
  firebaseMatches,
  firebasePlayers,
  firebasePromotions,
  firebaseTeams,
  firebaseDB
}