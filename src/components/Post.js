import React, { Component } from 'react';
import {posts} from "../shared/posts";
import {amounghtPost} from "../shared/utils";
import { PostItem } from './PostItem';
import '../components/PlaceList.css';
export class  Post extends Component{
   
state={
    showBlog:true,
    //беру из local
    blogArr: JSON.parse(localStorage.getItem('blogPost')) || posts
}
likePost=pos=>{
    const temp=[...this.state.blogArr];
    //в liked меняю true на false
    temp[pos].liked=!temp[pos].liked
    this.setState({blogArr:temp})
    //сохраняю массив в local
    localStorage.setItem('blogPost',JSON.stringify(temp))
}
toggleBlog=()=>{
    this.setState({
        showBlog:!this.state.showBlog
    })
}
 deletePost=pos=>{
    const temp=[...this.state.blogArr]; 
    temp.splice(pos,1);
    this.setState({blogArr:temp}) 
    localStorage.setItem('blogPost',JSON.stringify(temp))
 }


render(){
    const blogPost=this.state.blogArr.map((item,pos)=>{
        return(
          <PostItem
          key={item.id}
          title={item.title}
          description={item.description}
          liked={item.liked}
          likePost={()=>this.likePost(pos)}
          deletePost={()=>this.deletePost(pos)}
          image={item.image}
          />
        )
    })

  return (
      <>
       <button className="btn" onClick={this.toggleBlog}>{this.state.showBlog ? "Скрыть" : "Показать"}</button>
      {
      this.state.showBlog ?
      <>
      <div className="places-list">
      {blogPost}
     
      </div>
      </>
      : null
      }

</>
  );
}
}
