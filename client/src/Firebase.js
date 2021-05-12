import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAHoZz1SFb1haE9T28NNlumgSWQmsTknFg",
  authDomain: "capgemini-hwc-dev.firebaseapp.com",
  projectId: "capgemini-hwc-dev",
  storageBucket: "capgemini-hwc-dev.appspot.com",
  messagingSenderId: "605447170690",
  appId: "1:605447170690:web:3a70a21a28e9c55e1a229b",
});

export const auth = app.auth();
export default app
