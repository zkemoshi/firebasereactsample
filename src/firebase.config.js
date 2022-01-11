// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAAWvZNarEwNvudJmcpxCoITfxgqDWzP8w',
  authDomain: 'housemarket-8db0c.firebaseapp.com',
  projectId: 'housemarket-8db0c',
  storageBucket: 'housemarket-8db0c.appspot.com',
  messagingSenderId: '678390875983',
  appId: '1:678390875983:web:5d639cebb4ed303738673a',
  measurementId: 'G-NQ6HP5VD6Z',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();
