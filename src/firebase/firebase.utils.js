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

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async ( userAuth,additionalData ) => {
    if(!userAuth) return;
 
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

export const addCollectionAndDocument = async (collectionKey,objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();

    objectsToAdd.forEach((obj) => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef,obj);

    });

    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
    const transformedObject = collections.docs.map(doc => {
      const { title,items } = doc.data();

      return {
        routeName : encodeURI(title.toLowerCase()),
        id : doc.id,
        title,
        items
      }
    });
    
    return transformedObject.reduce((accumulator,collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    },{});
};

export const getCurrentUser = () => {
  return new Promise((resolve,reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    },reject);
  });
}

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;