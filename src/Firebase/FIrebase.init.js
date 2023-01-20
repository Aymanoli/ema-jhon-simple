import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";


const initializeAuthentication = () =>{
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/*
steps for authentication 
-------------------
step-1: initial setup
1 firevase: create project
2. create web app
3. get configuration
4. initilize firebase
5. Enable auth method
-------------

step-2: setup components
1. create login component
2. create register components
create router for login and register
------------
step-3: set up auth system
1. set up sing in method
2. setup sing out method
3. user state
4. special observer
5. return nacessary methods and states from useFirebase
FIrebase.init.js]
----------------
step-4: create auth context hook(useAuth)
1. create a auth context
2. create context provider
3. use auth provider
4. creaate useAuth Hook
5. set context proivder context value
------------------
step-5: create private route
1. create private Router
2. set private router
*/