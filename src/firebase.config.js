import { getApp, getApps, initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBYgaQjP06HwafHTRaxRZ7PhnWSD_GY_Q4',
  authDomain: 'restaurant-app-1b080.firebaseapp.com',
  databaseURL: 'https://restaurant-app-1b080-default-rtdb.firebaseio.com',
  projectId: 'restaurant-app-1b080',
  storageBucket: 'restaurant-app-1b080.appspot.com',
  messagingSenderId: '93836217449',
  appId: '1:93836217449:web:f5d705461cf91f027a26f8'
}

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

const firestore = getFirestore(app)

const storage = getStorage(app)

const firebaseAuth = getAuth(app)

const provider = new GoogleAuthProvider()

export { app, firestore, storage, firebaseAuth, provider }
