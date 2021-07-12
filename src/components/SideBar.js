import React, { useState } from 'react';

const SideBar = () => {
    const [state, setState] = useState([
    { id: 1, image: "/images/mypic1.jpg", name: "Flutter Development" },
    { id: 2, image: "/images/akhil.jpg", name: "PHP Development" },
    { id: 3, image: "/images/chaitu.jpg", name: "React Native Development" },
    { id: 4, image: "/images/nag.jpg", name: "Node JS Development" },
    { id: 5, image: "/images/salman.jpg", name: "Vue JS Development" },
    { id: 6, image: "/images/simbhu.jpg", name: "React Development" }

    ]);
    return (
        <div className="sidebar">
            {state.map((info) => (
                <div className="sidebar__list" key={info.id}>
                <div className="sidebar__list-img">
                    <img src={info.image} alt="group image" />
                </div>
                <div className="sidebar__list-name">{info.name}</div>
            </div>

            ))}
            
        </div>
    );
};

export default SideBar;