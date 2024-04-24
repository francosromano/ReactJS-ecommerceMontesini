// # Haciendo esto, me carga el Firestore pero no el html al hosting
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG)

const app = initializeApp(firebaseConfig)

export const database = getFirestore(app)



// Haciendo esto, me carga el html al hosting, pero no me carga el Firestore: 

// /* eslint-disable no-undef */
// import { initializeApp } from "firebase/app"
// import { getFirestore } from "firebase/firestore"

// // const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG)

// const firebaseConfig= {
//     apiKey: process.env.VITE_FIREBASE_API_KEY,
//     authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.VITE_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.VITE_FIREBASE_APP_ID,
// }

// const app = initializeApp(firebaseConfig)

// export const database = getFirestore(app)

