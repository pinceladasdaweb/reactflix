import 'firebase/auth'
import 'firebase/firestore'
import Firebase from 'firebase/app'
// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed'

// 2) populate variables with your config!
const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: ''
}

const firebase = Firebase.initializeApp(config)
// 3) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase)
// 4) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase }
