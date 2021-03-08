import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts,setPost]= useState([]);
    useEffect(() =>{
        const url =`https://jsonplaceholder.typicode.com/posts`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[])
    return (
        <div>
            <h4>This is Home</h4>
            <h5> load: {posts.length}</h5>
            {
                posts.map(post=> <Post post={post}></Post> )
            }
        </div>
    );
};

export default Home;