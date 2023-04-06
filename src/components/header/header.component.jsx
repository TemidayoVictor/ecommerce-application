import React from "react";

import {Link} from 'react-router-dom';

import {signUserOut} from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from "../../assets/crown.svg";

import './header.style.scss';

const Header = (props) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>

        <div className="options">
            <Link className="option" to='/shop'>
                Shop
            </Link>

            <Link className="option" to='/shop'>
                Contact
            </Link>
            {
                props.currentUser ? 
                <button className="option" onClick={()=> signUserOut }>Sign Out</button> 
                : 
                <Link className="option" to='/signin'>Sign In</Link>
            }
        </div>
    </div>
)

export default Header