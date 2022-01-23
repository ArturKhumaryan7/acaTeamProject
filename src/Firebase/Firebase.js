import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQ-Mfx0fWYdpGmabfKoQSFHW4XjUlO1Fg",
  authDomain: "acateamproject-34b23.firebaseapp.com",
  projectId: "acateamproject-34b23",
  storageBucket: "acateamproject-34b23.appspot.com",
  messagingSenderId: "6952565248",
  appId: "1:6952565248:web:489d3f2f6591cbfce9f6e5",
  measurementId: "G-MS9GF5CH4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const facebookProvider = new FacebookAuthProvider()

export const singInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
    .then(res => {
      console.log(res)
      let name = ""
      let surname = ""
      if(res.user.displayName != null){
        name = res.user.displayName.split(" ")[0]
        surname = res.user.displayName.split(" ")[1]
      }
      window.localStorage.setItem("currentUser", JSON.stringify({
        name: name,
        surname: surname,
        password: "",
        email: res.user.email,
        profilePicture: "",
        city: "",
        status: "user",
        id: ""
      }))
      window.localStorage.setItem("isUserLogIned", true)
      window.location.href = "/"
    })
    .catch(err => console.log(err))
}

export const signInWithGitHub = () => {
  signInWithPopup(auth, githubProvider)
    .then(res => {
      console.log(res)
      let name = ""
      let surname = ""
      if(res.user.displayName != null){
        name = res.user.displayName.split(" ")[0]
        surname = res.user.displayName.split(" ")[1]
      }
      window.localStorage.setItem("currentUser", JSON.stringify({
        name: name,
        surname: surname,
        password: "",
        email: res.user.email,
        profilePicture: "",
        city: "",
        status: "user",
        id: ""
      }))
      window.localStorage.setItem("isUserLogIned", true)
      window.location.href = "/"
    })
    .catch(err => console.log(err))
}

export const signInWithFacebook = () => {
  signInWithPopup(auth, facebookProvider)
    .then(res => {
      console.log(res)
      let name = ""
      let surname = ""
      if(res.user.displayName != null){
        name = res.user.displayName.split(" ")[0]
        surname = res.user.displayName.split(" ")[1]
      }
      window.localStorage.setItem("currentUser", JSON.stringify({
        name: name,
        surname: surname,
        password: "",
        email: res.user.email,
        profilePicture: "",
        city: "",
        status: "user",
        id: ""
      }))
      window.localStorage.setItem("isUserLogIned", true)
      window.location.href = "/"
    })
    .catch(err => console.log(err))
}