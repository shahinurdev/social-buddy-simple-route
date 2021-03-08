import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    const {id,title,body}= props.post;
    const history = useHistory();
    const showComments = (id)=>{
        const url = `/post/${id}`;
        history.push(url);
    }
    const divStyle ={
        margin:'5px',
        padding:'5px',
        borderBottom: '1px solid lightgray',
    }
    return (
        <div style={divStyle}>
            <h4>{id}</h4>
            <h4>{title}</h4>
            <h4>{body}</h4>
            <button onClick={()=>showComments(id)}>Show More</button>
        </div>
    );
};

export default Post;