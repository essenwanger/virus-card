import firebase from 'firebase/app'
import "firebase/database"

const config = {
  apiKey: "AIzaSyAE9sLvPd7KNDzmUVaVf-AFoDP0tl9fwIs",
  authDomain: "virus-card.firebaseapp.com",
  databaseURL: "https://virus-card.firebaseio.com",
  projectId: "virus-card",
  storageBucket: "virus-card.appspot.com",
  messagingSenderId: "652691380729",
  appId: "1:652691380729:web:4af2ed2a7f4c76a8e38528",
  measurementId: "G-BM9H316WPY"
}

firebase.initializeApp(config)

export default firebase