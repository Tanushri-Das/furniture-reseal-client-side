// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: "AIzaSyCYYZOkv6rjl_A6acmX_XaV2iwi_tr4bsM",
//   authDomain: "furniture-reseal.firebaseapp.com",
//   projectId: "furniture-reseal",
//   storageBucket: "furniture-reseal.appspot.com",
//   messagingSenderId: "577073387014",
//   appId: "1:577073387014:web:15cfff989b27c976069587"

apiKey: process.env.REACT_APP_apiKey,
authDomain: process.env.REACT_APP_authDomain,
projectId: process.env.REACT_APP_projectId,
storageBucket: process.env.REACT_APP_storageBucket,
messagingSenderId: process.env.REACT_APP_messagingSenderId,
appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;