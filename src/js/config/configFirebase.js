const firebaseConfig = {
    apiKey: "AIzaSyDuoFzHW1MUhvJa3CEFxsMUq2_HYEyJma0",
    authDomain: "sayni-pe.firebaseapp.com",
    databaseURL: "https://sayni-pe.firebaseio.com",
    projectId: "sayni-pe",
    storageBucket: "sayni-pe.appspot.com",
    messagingSenderId: "1033272684788",
    appId: "1:1033272684788:web:f38a94569019abdbfeeea1",
    measurementId: "G-Y1WJ7MXM7X"
};      

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const auth = firebase.auth();
  const fs = firebase.firestore();
