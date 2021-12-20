import { initializeApp } from 'firebase/app';

// Firebase Configuration
const app = initializeApp({
    // apiKey: process.env.REACT_APP_API_KEY,
    apiKey: 'AIzaSyD--uvyPvrx4WEgBVpI2YJ7lw2prmMEVSs',
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
});

export default app;