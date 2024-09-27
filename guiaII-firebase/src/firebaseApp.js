// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB__5AwZ6av6w-NB64eiW1f4jX-A937ro8',
  authDomain: 'crud-productos-72ba4.firebaseapp.com',
  projectId: 'crud-productos-72ba4',
  storageBucket: 'crud-productos-72ba4.appspot.com',
  messagingSenderId: '468079182242',
  appId: '1:468079182242:web:0bfe89f970b62f96a4b2fb'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const $db = getFirestore(app)

export { $db }
