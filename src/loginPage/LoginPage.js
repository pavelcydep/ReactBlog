import { useState } from "react";

export const LoginPage=({
    setUserName,
    setisLogin,
    history})=>{

const handleLogin=(e)=>{
    e.preventDefault();
    
    setisLogin(true);
    localStorage.setItem('userName',login);
    localStorage.setItem('islogin',true);
    history.push('/');
  
}
const[login,setLogin]=useState('');
const[password,setPassword]=useState('');
const handleLoginOnchange=(e)=>{
    
      setLogin(e.target.value) 
    
}
const handlePasswordOnchange=(e)=>{
    
    setPassword(e.target.value) 
  
}

    return(
        
          
        <div className="popup">
       
        
        <div class="popup__content">
         
         <img src  alt="" class="popup__close"/>
            
          <h3 class="popup__title">Авторизация</h3>
          <form class="popup__form"
          onSubmit={handleLogin}
           name="new" novalidate>
           
            <input
             type="text"
              id="name-card"
              name="title"
             class="popup__input popup__input_type_name"
              minlength="2"
            maxlength="30"
             required placeholder="логин"
             onChange={handleLoginOnchange}
             />
             
             
             <input
             type="text"
              id="name-card"
              name="image"
             class="popup__input popup__input_type_name"
              minlength="2"
              onChange={handlePasswordOnchange}
             required placeholder="Пароль"
            
             />
            <span id="name-card-error" class="error"></span>
          
         
          
            <span id="link-error" class="error"></span>
            <button type="submit" class="button popup__button  popup__button_valid"   >+</button>
        </form>
      </div>
      
    </div>
    );
}