// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyArqWBBcQTM2RToy-uLQEIK09gtVdkDYew',
  authDomain: 'farmacia-35280.firebaseapp.com',
  projectId: 'farmacia-35280',
  storageBucket: 'farmacia-35280.appspot.com',
  messagingSenderId: '669960923843',
  appId: '1:669960923843:web:3ae4b493bcb62730ffd076'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const $db = getFirestore(app)

export { $db }
