import firebase from 'react-native-firebase';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

export function login({email,password}){
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then((value)=>console.log(value))
}

export function signup({email,password,username}){
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((userInfo)=>{
        console.log(userInfo)
        userInfo.user.updateProfile({displayName: username.trim()})
        .then(()=>{})
    })

export function signout(onSignedOut){
    firebase.auth().signout()
    .then(()=>{
        console.log('Signed out.')
        onSignedOut();
    })
}

export function subscribeToAuthChanges(authStateChanged) {
    firebase.auth().onAuthStateChanged((user) => {
      authStateChanged(user);
    })
  }

}