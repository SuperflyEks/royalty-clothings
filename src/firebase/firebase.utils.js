import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBca2Ra4GJU5waza6WVZeVGOZqD71ZjNJU",
    authDomain: "royalty-clothings-db.firebaseapp.com",
    databaseURL: "https://royalty-clothings-db.firebaseio.com",
    projectId: "royalty-clothings-db",
    storageBucket: "royalty-clothings-db.appspot.com",
    messagingSenderId: "568259334496",
    appId: "1:568259334496:web:660b08207ab62f27e88e05"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;