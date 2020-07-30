import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCnb9CyFA8Cn2eMm_0XFQLEt2r7nEoCcbk",
    authDomain: "royalty-db-b40bf.firebaseapp.com",
    databaseURL: "https://royalty-db-b40bf.firebaseio.com",
    projectId: "royalty-db-b40bf",
    storageBucket: "royalty-db-b40bf.appspot.com",
    messagingSenderId: "205508565397",
    appId: "1:205508565397:web:8892445e9370fa50477e9c"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;