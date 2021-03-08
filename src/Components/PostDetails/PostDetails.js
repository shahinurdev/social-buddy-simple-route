import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comments from '../Comments/Comments';

const PostDetails = () => {
    const {id} = useParams();
    const [post,setPost] = useState({});
    const [comments,setComments] = useState([]);
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
         fetch(url)
        .then(res => res.json())
        .then(data =>setPost(data))
    },[]);
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setComments(data))
    },[]);
    return (
        <div>
          <h4>{post.id}</h4>
          <h4>{post.title}</h4>
          {
              comments.map(comment=> <Comments comment={comment}></Comments> )
          }
        </div>
    );
};

export default PostDetails;