import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";


const initializeAuthentication = () =>{
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/*
steps for authentication 
-------------------
initial steps
1. firevase: create project
2. create web app
3. get configuration
4. initilize firebase
5. Enable auth method
*/