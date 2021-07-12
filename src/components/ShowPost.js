import React, { useState } from 'react';
import { FaRegCommentAlt, FaRegThumbsUp, FaShareAlt } from 'react-icons/fa';

const ShowPost = () => {
    const [state,setState] = useState([
        { 
            id: 1, 
            userImg: "/images/mypic2.jpg",
            name:"Yakhub khan",
            time:"2h",
            text:"India (Hindi: Bhārat), officially the Republic of India\
                  is a country in South Asia. It is the second-most populous country.",
            postImg: '/images/salman.jpg'
        },
        { 
            id: 2, 
            userImg: "/images/akhil.jpg",
            name:"Akhil",
            time:"2h",
            text:"India (Hindi: Bhārat), officially the Republic of India\
                 is a country in South Asia. It is the second-most populous country.",
            postImg: '/images/thajmahal.jpg'
        },
        { 
            id: 3, 
            userImg: "/images/nag.jpg",
            name:"Nagarjuna",
            time:"2h",
            text:"India (Hindi: Bhārat), officially the Republic of India\
                  is a country in South Asia. It is the second-most populous country.",
            postImg: '/images/charminar.jpg'
        },
        { 
            id: 4, 
            userImg: "/images/chaitu2.jpg",
            name:"Chaithanya",
            time:"2h",
            text:"India (Hindi: Bhārat), officially the Republic of India\
                 is a country in South Asia. It is the second-most populous country.",
            postImg: '/images/biryani.jpg'}
    ]);
    return (
        <div className="show">
            {state.map(post => (
                <div key={post.id} className="empty">
                <div className="show__header">
                <div className="show__header-img">
                    <img src={post.userImg} alt="user" />
                </div>
                <div className="show__header-name">
                    {post.name} <div className="date">{post.time}</div>
                </div>
            </div>
            <div className="show__body">
                <div className="show__body-text">
                {post.text}
                </div>
                <div className="show__body-img">
                      <img src={post.postImg} alt="post" />
                </div>
            </div>
            <div className="show__reactions">
                <span className="reactions">
                    <FaRegThumbsUp/> <span className="reactions-text">Like</span>
                </span>
                <span className="reactions">
                    <FaRegCommentAlt/> <span className="reactions-text">Comment</span>
                </span>
                <span className="reactions">
                    <FaShareAlt/> <span className="reactions-text">Share</span>
                </span>
            </div>
            </div>
            ))}
        </div>
    );
};

export default ShowPost;