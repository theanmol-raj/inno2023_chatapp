import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import AppScreen from "./screen/AppScreen";
import LoginScreen from "./screen/LoginScreen";
import app from "./firebase";
import { getAuth, signInWithPopup , signOut, GoogleAuthProvider,onAuthStateChanged  } from "firebase/auth";
import Load from "./screen/Load";


function App() {
  

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();





  const [loading ,setLoading ] = useState(true) ;



  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])






  const [user ,setUser] = useState(()=>auth.currentUser) ;


  function signInHandler(){
    signInWithPopup(auth, provider)
  .then((result) => {
    
    const userdata = result.user;
    setUser(userdata)

  }).catch((error) => {
    setUser(null)
  });
    
  }


  function signOutHandler(){
    signOut(auth).then(() => {
      setUser(null)
    }).catch((error) => {
      setUser(null)
    });
    
  }


  // 
    useEffect(()=>{
      onAuthStateChanged(auth, (u) => {
        if (u) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          setUser(u)
          // ...
        } else {
          // User is signed out
          // ...
          setUser(null)
        }
      });

    },[])
  // 




if (loading) return <Load /> ;
  return (
    <div >
      {user ? <AppScreen fn={signOutHandler} /> : <LoginScreen fn={signInHandler} />  }
      
      
    </div>
  );
}

export default App;
