import React from "react";
import Logo from '../../assets/images/logo.png';
import Discord from '../../assets/images/discord.png';
import Twitter from '../../assets/images/twitter.png';
import Instagram from '../../assets/images/instagram.png';

import './style.scss';

const Navigation = () => {
    return (
        <div className="navbar">
            <div className="container">
                <a href="https://wtfkilledtimmy.online" className="logo">
                    <img src={Logo} alt="wtfkilledtimmy" />
                </a>
                <div className="socials">
                    <a href="https://discord.gg/mgTURNpJ3v" className="item">
                        <img src={Discord} alt="Discord" />
                    </a>
                    <a href="https://twitter.com/wtfkilledtimmy" className="item">
                        <img src={Twitter} alt="Twitter" />
                    </a>
                    <a href="https://instagram.com/wtfkilledtimmy" className="item">
                        <img src={Instagram} alt="Instagram" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navigation