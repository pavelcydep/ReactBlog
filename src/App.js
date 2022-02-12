import {React,useState} from 'react';
import './App.css';
import {Header} from './components/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import  {PostContainer} from './components/PostContainer';
import {LoginPage} from './loginPage/LoginPage';
 export const App=()=> {
   const[isLogin,setisLogin]= useState(()=>{
     if(localStorage.getItem('islogin')) return true;
     return false;
   });
   
   const[userName,setUserName]=useState("");
  return (
    <>
  <BrowserRouter>
  
<Header isLogin={isLogin}
 setisLogin={setisLogin}
 userName={userName} />

    <div className = "container">
    <Switch>

    <Route path={'*'}  exact component={PostContainer} />
      <Route path={'/login'} exact render={(props)=>(
      <LoginPage  {...props} 
      setisLogin={setisLogin} 
      setUserName={setUserName} />)} />
      </Switch>
      </div>
     
      </BrowserRouter>
</>
     
     
  );
}

