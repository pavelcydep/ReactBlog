import close from "../images/close.svg";
import React, { Component } from 'react';
export class AddPostForm extends Component{
    state={
        title:'',
        description:'',
        image:''
    }
    handleTitleOnchange=e=>{
        this.setState({
           title:e.target.value,
        
        })
    }
    handleImageOnchange=e=>{
        this.setState({
           image:e.target.value,
        
        })
    }
    closeEscape = (e) => {
        if (e.key === "Escape" ) {
            this.props.togglePopupClose();
        }
    }
    handleDescriptionOnchange=e=>{
        this.setState({
           description:e.target.value
        })
    }
    createPost=()=>{
        const post={
          
            title: this.state.title,
            description:this.state.description ,
            liked: false,
            image: this.state.image   
        }
        this.props.addNewPost(post);
        this.props.togglePopupClose();
    }
    componentDidMount() {
       
        window.addEventListener('keyup', this.closeEscape);
    }
    componentWillUnmount() {
        window.removeEventListener('keyup', this.closeEscape);
    }
    render(){
    const togglePopupClose= this.props.togglePopupClose;
    


    return(
        
          
        <div className="popup">
       
        
        <div class="popup__content">
         
         <img src={close}  onClick={togglePopupClose} alt="" class="popup__close"/>
            
          <h3 class="popup__title">Добавить пост</h3>
          <form class="popup__form"
          onSubmit={this.createPost}
           name="new" novalidate>
           
            <input
             type="text"
              id="name-card"
              name="title"
             class="popup__input popup__input_type_name"
              minlength="2"
            maxlength="30"
             required placeholder="Название поста"
             value={this.state.title}
             onChange={this.handleTitleOnchange}
             />
             
             
             <input
             type="text"
              id="name-card"
              name="image"
             class="popup__input popup__input_type_name"
              minlength="2"
          
             required placeholder="Ссылка на картинку"
             value={this.state.image}
             onChange={this.handleImageOnchange}
             />
            <span id="name-card-error" class="error"></span>
          
            <textarea
             type="text"
              id="description"
               name="description"
                class="popup__input popup__input_type_link-url" 
                minlength="2"
                 required 
                 placeholder="Текст поста"
                 value={this.state.description}
                 onChange={this.handleDescriptionOnchange}
                 
                 />
          
            <span id="link-error" class="error"></span>
            <button type="submit" class="button popup__button  popup__button_valid"  >+</button>
        </form>
      </div>
      
    </div>
    );
}
}