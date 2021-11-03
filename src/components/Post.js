import React, { Component } from 'react';
import { posts } from "../shared/posts";
import axios from "axios";
import { PostItem } from './PostItem';
import { AddPostForm } from './AddPostForm';
import { EditPostForm } from './EditPostForm';
import '../components/PlaceList.css';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
let source;

export class Post extends Component {

    state = {
        popupEdit:false,
        popupAdd: false,
        blogArr: [],
        isPending:false,
        selectedPost:{},
    }
    likePost = (post) => {
        const temp={...post};
        temp.liked = !temp.liked;
        axios.put(`https://617e6ebc2ff7e600174bd7c2.mockapi.io/posts/${post.id}`,temp)
        .then((response)=>{console.log('Пост изменен=>',response.data)
        this.fetchPost()
        }
        )
        .catch((error)=>{
         console.log(error)})
    }
    

        togglePopupEdit= () => {
            this.setState({
                popupEdit: true
            })
        }

        togglePopupAdd = () => {
            this.setState({
                popupAdd: true
            })
    }
    togglePopupClose = () => {
        this.setState({
            popupAdd: false,
            })
    }

    togglePopupCloseEdit = () => {
        this.setState({
            popupEdit: false,
            })
    }


    deletePost = (post) => {
        this.setState({
            isPending: true
         })
       axios.delete(`https://617e6ebc2ff7e600174bd7c2.mockapi.io/posts/${post.id}`)
       .then((response)=>{console.log('Пост удален=>',response.data)
       this.fetchPost()
       }
       )
       .catch((error)=>{
        console.log(error)})
    }
 
handleSelectPost=(post)=>{
    this.setState({
        selectedPost:post
    })
}

    addNewPost=(post)=>{
        this.setState({
            isPending: true
         })
         axios.post('https://617e6ebc2ff7e600174bd7c2.mockapi.io/posts',post)
         .then((response)=>{console.log('Пост добавлен=>',response.data)
         this.fetchPost()
         }
         )
         .catch((error)=>{
          console.log(error)})
    }
editPost=(post)=>{
    this.setState({
        isPending: true
     })
     axios.put(`https://617e6ebc2ff7e600174bd7c2.mockapi.io/posts/${post.id}`,post)
     .then((response)=>{console.log('Пост добавлен=>',response.data)
     this.fetchPost()
     }
     )
     .catch((error)=>{
      console.log(error)})
}


    fetchPost=()=>{
      source=axios.CancelToken.source();
        axios.get('https://617e6ebc2ff7e600174bd7c2.mockapi.io/posts',{cancelToken:source.token})
        .then((response)=>{console.log(response.data)
            this.setState({
         blogArr:response.data,
         isPending: false
           }) 
        })
        .catch((error)=>{
            console.log(error)})
    }
    componentDidMount() {
        this.fetchPost();
       
    }
    componentWillMount() {
       if(source){
           source.cancel('axios')
       }
       
    }
  




    render() {
        console.log(this.state.selectedPost);
        const isOpacity= this.state.isPending ? 0.5 : 1 ;
        const blogPost = this.state.blogArr.map((item) => {
            if (item!==null){
             return(
            <PostItem
                key={item.id}
                title={item.title}
                description={item.description}
                liked={item.liked}
                likePost={() => this.likePost(item)}
                deletePost={() => this.deletePost(item)}
                image={item.image}
                togglePopupEdit={() =>this.togglePopupEdit()}
                handleSelectPost={()=>this.handleSelectPost(item)}
            />
        )
        }
        })
        
        return (
            <>
            <div className="title container">
            <Button variant="outlined" onClick={this.togglePopupAdd}>Создать пост</Button>
                </div>
                {
                    this.state.popupAdd ?
                        <>
                            <AddPostForm
                            blogArr={this.state.blogArr}
                            togglePopupClose={this.togglePopupClose}
                            addNewPost={this.addNewPost} />
                        </> : null}
                      
                        {
                    this.state.popupEdit ?
                        <>
                            <EditPostForm
                            blogArr={this.state.blogArr}
                            selectedPost={this.state.selectedPost}
                            togglePopupClose={this.togglePopupCloseEdit}
                            editPost={this.editPost} />
                        </> : null
                        }
                      
                
                 <div className="places-list">
                 <div className="circular" style={{opacity: isOpacity}}>
                        {
                       this.state.isPending && <CircularProgress />
                    }</div>
                        {blogPost}
                    
                        </div>
                
                </> 
        );

    }
}