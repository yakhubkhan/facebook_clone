import React, { useState } from 'react';

const ChatBar = (props) => {
    const [state,setState] = useState([
        {
            id: 1,
            image:'/images/nag.jpg',
            name:'Nagarjuna'
        },
        {
            id: 2,
            image:'/images/akhil.jpg',
            name:'Akhil'
        },
        {
            id: 3,
            image:'/images/chaitu.jpg',
            name:'Chaithanya'
        },
        {
            id: 4,
            image:'/images/salman.jpg',
            name:'Salman'
        },
        {
            id: 5,
            image:'/images/simbhu.jpg',
            name:'Simbhu'
        },
        {
            id: 6,
            image:'/images/mypic2.jpg',
            name:'Aman'
        },
        {
            id: 7,
            image:'/images/mypic3.jpg',
            name:'Khan'
        },
        {
            id: 8,
            image:'/images/mypic4.jpg',
            name:'Yakhub'
        },
        {
            id: 9,
            image:'/images/salman.jpg',
            name:'Salman khan'
        },
        {
            id: 10,
            image:'/images/simbhu.jpg',
            name:'Simbhu'
        },
        {
            id: 11,
            image:'/images/nag.jpg',
            name:'Nagarjuna'
        },
        {
            id: 12,
            image:'/images/akhil.jpg',
            name:'Akhil'
        },
        {
            id: 13,
            image:'/images/chaitu.jpg',
            name:'Chaithanya'
        },
        {
            id: 14,
            image:'/images/mypic3.jpg',
            name:'Khan'
        },
        {
            id: 15,
            image:'/images/mypic4.jpg',
            name:'Yakhub'
        },
        {
            id: 16,
            image:'/images/salman.jpg',
            name:'Salman'
        },
        {
            id: 17,
            image:'/images/simbhu.jpg',
            name:'Simbhu'
        },
        {
            id: 18,
            image:'/images/nag.jpg',
            name:'Nagarjuna'
        },
        {
            id: 19,
            image:'/images/akhil.jpg',
            name:'Akhil'
        },
        {
            id: 20,
            image:'/images/chaitu.jpg',
            name:'Chaithanya'
        },
    ])

    const openChat = (user) => {
        props.openChat(user);
    }
    return (
        <div className="chatBar">
            {state.map(user => (
                <div className="chatBar__list" key={user.id} 
                onClick={ () => openChat(user)}>
                <div className="chatBar__list-img">
                    <img src={user.image} alt="user" />
                    <span className="status"></span>
                </div>
                <div className="chatBar__list-name">{user.name}</div>
            </div>
            ))}
            
        </div>
    );
};

export default ChatBar;