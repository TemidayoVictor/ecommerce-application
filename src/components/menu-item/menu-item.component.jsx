import React from "react";
import {withRouter} from 'react-router-dom';

import './menu-item.style.scss';

const MenuItem = ({title, ImageName, size, history, match, linkUrl}) => (
    
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        
        <div style={{ backgroundImage: `url(${ImageName})`}} className="background-image" />
        
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">Shop Now</span>
        </div>            
    </div>
);
    
export default withRouter(MenuItem);