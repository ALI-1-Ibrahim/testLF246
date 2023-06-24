

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";

import { getAuth,updateProfile ,sendPasswordResetEmail,createUserWithEmailAndPassword,sendSignInLinkToEmail,signInWithEmailAndPassword,onAuthStateChanged ,sendEmailVerification,} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyCWjR-SzTBkaJMVj9gcA6g_spcn6YS9Rg0",
    authDomain: "test-45ec8.firebaseapp.com",
    databaseURL: "https://test-45ec8-default-rtdb.firebaseio.com",
    projectId: "test-45ec8",
    storageBucket: "test-45ec8.appspot.com",
    messagingSenderId: "1038009051334",
    appId: "1:1038009051334:web:69f178ad59e73683bbcfc7"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

 var email = "alielmasrely555554@gmail.com";
var password = "123456";
const auth = getAuth(app);
















document.getElementById('forget').addEventListener('click',async function () {
   
// console.log(auth)
createUserWithEmailAndPassword(auth, email, password)
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

// await signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
    // updateProfile(auth.currentUser, {
    //     phone: '01024568234',gender:'male'
    //   }).then(() => {
    //     // Profile updated!
    //     console.log('khkjh')
    //     // ...
    //   }).catch((error) => {
    //     // An error occurred
    //     // ...
    //   });
    // console.log(user)
    // ...
    // const user = auth.currentUser;
//   if (user !== null) {
//     user.providerData.forEach((profile) => {
//       console.log("Sign-in provider: " + profile.phone);
//       console.log("  Provider-specific UID: " + profile.uid);
//       console.log("  Name: " + profile.displayName);
//       console.log("  Email: " + profile.email);
//       console.log("  Photo URL: " + profile.gender);
//     });
//   }
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

  
  
//   sendPasswordResetEmail(auth, email)
//   .then(() => {
//     // Password reset email sent!
//     // ..
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
})
