import React from 'react';


const Comments = (props) => {
    console.log("who is here",props.comment);
    const {name,email} = props.comment;
    const commentStyle = {
        color: 'red',

    }
    return (
        <div style={commentStyle}>
            <h4> Name: {name} </h4>
            <h5>Email: {email}</h5>
        </div>
    );
};

export default Comments;