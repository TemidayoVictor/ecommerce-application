import React from "react";

import './menu-item.style.scss';

import image1 from '../../images/Image1.png';
import image2 from '../../images/Image2.png';
import image3 from '../../images/Image3.png';
import image4 from '../../images/Image4.png';
import image5 from '../../images/Image5.png';

const MenuItem = ({title, ImageName, size}) => (
    
    <div className={`${size} menu-item`}>
        
        <div style={{ backgroundImage: `url(${image5})`}} className="background-image" />
        
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">Shop Now {ImageName}</span>
        </div>            
    </div>
);

export default MenuItem;