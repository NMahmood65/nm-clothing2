import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app';
import { 
getAuth, 
signInWithRedirect, 
signInWithPopup,
GoogleAuthProvider,
} from 'firebase/auth';
import {
getFirestore,
doc,
getDoc,
setDoc,
} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCOaUcNkKXrQTnDHx496VsfmVhLhdDhDJg",
    authDomain: "crwn-clothing-db-2b7a7.firebaseapp.com",
    projectId: "crwn-clothing-db-2b7a7",
    storageBucket: "crwn-clothing-db-2b7a7.appspot.com",
    messagingSenderId: "316462765340",
    appId: "1:316462765340:web:e3ce0502a4d5d5fc0a56d9"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot);
    console.log(userSnapShot.exists());
}