// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyADLc_ouKI2S4IaSxhP1rL7N8ycPhGS8g8",
    authDomain: "crwn-clothing-4b790.firebaseapp.com",
    databaseURL: "https://crwn-clothing-4b790.firebaseio.com",
    projectId: "crwn-clothing-4b790",
    storageBucket: "crwn-clothing-4b790.appspot.com",
    messagingSenderId: "528773459064",
    appId: "1:528773459064:web:8d6aff6eb6c3e19bd5d18d",
    measurementId: "G-LHN0975MMF"
};

export const createUserProfileDocument = async ( userAuth,additionalData ) => {
    if(!userAuth) return;
    
    console.log(userAuth);
 
    const userRef = firestore.doc(`users/${userAuth.uid}`); //This is gives the user doc back (Reference)

    const snapShot = await userRef.get(); //Then we get the the snapshot of the user (Snapshot)
    
    if(!snapShot.exists){ //If the exists property of the snapshot is false we create a user
      const { displayName,email } = userAuth;
      const createdAt = new Date();

      try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
      } catch (error) {
        console.log('Error creating user : ',error.message);
      }
      
    }
    return userRef;
}

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;