var db = firebase.firestore();

function storeData() {

  var inputName = document.getElementById("text_name").value
  var inputClass = document.getElementById("text_class").value
  var inputSection = document.getElementById("text_section").value
  if (inputName && inputClass && inputSection != null) {
    db.collection("Users").doc(inputName).set(
      {
        Name: inputName,
        Class: inputClass,
        Section: inputSection,
        Class: inputClass


      })

      .then(function () { console.log("success writing data") })

      .catch(function () {
        console.error("writing not successful bla bla bla")
      })
  } else {
    window.alert("Plase enter the data or is not done ")
  }
}


function writeFeedback() {
  var database = firebase.database();
  var context = document.getElementById("message").value
  var FeedName = document.getElementById("name").value
  var FeedEmail = document.getElementById("email").value

  if (context && FeedName && FeedEmail !== null) {

    database.ref("users" + email_text).set({
      username: FeedName,
      email: FeedEmail,
      feedback: context
    })
  }
}

//Auth UI
/*
var ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
  callbacks: {
    signInSuccess: function(currentUser, credential, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader');
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: '<url-to-redirect-to-on-success>',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
    //firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>'
};
function signInFirebase() {
    ui.start('#firebaseui-auth-container',uiConfig);
}*/
