//firebase config

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDPxyyTaMYaAiiR1zjY4xN5BOeyljpOTi0",
  authDomain: "fir-34933.firebaseapp.com",
  databaseURL: "https://fir-34933-default-rtdb.firebaseio.com",
  projectId: "fir-34933",
  storageBucket: "fir-34933.appspot.com",
  messagingSenderId: "420629822802",
  appId: "1:420629822802:web:9d5d9bff554ec031dece8b",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
