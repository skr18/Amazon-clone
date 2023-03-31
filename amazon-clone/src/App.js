import './App.css';
import React , {useEffect} from 'react';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router,
  Routes,Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
function App() {

  const [{basket,user},dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser =>{
      console.log("The user is >>> ",authUser);
      if(authUser){
        dispatch({
          type:"SET_USER",
          user: authUser
        })
      }
      else{
        dispatch({
          type:"SET_USER",
          user: null
        })
      }
    })
  },[])
  return (
    //BEM
    <>
    <Router>
      <div className="App"> 
        <Routes>
          <Route path="/" element={[<Header />,<Home />]} />
          <Route path="/checkout" element={[<Header />,<Checkout/>]}/>
          <Route path='/login' element={<Login/>}/>
          <Route path="/payment" element={[<Header />,<Payment/> ]}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
