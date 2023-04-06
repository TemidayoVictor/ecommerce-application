import { initializeApp } from "firebase/app";

import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
    
const firebaseConfig = {
    apiKey: "AIzaSyDHyQq1fkv0MFuh9iILdGkq51OJ3yE_jVE",
    authDomain: "ecomm-app-1eb7d.firebaseapp.com",
    projectId: "ecomm-app-1eb7d",
    storageBucket: "ecomm-app-1eb7d.appspot.com",
    messagingSenderId: "395672096916",
    appId: "1:395672096916:web:0b0621e9a4e732484ca481",
    measurementId: "G-RLL4Q2RN3L"
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const signUserOut = signOut(getAuth());

const provider = new GoogleAuthProvider();

const signInWithGoogle = () => (signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
}));

export default signInWithGoogle
