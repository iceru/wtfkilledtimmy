import React, { useState } from "react";
import Logo from '../../assets/images/logo.png';
import Discord from '../../assets/images/discord.png';
import Twitter from '../../assets/images/twitter.png';
import Instagram from '../../assets/images/instagram.png';
import Menu from '../../assets/images/Menu.png';
import KepoNav from '../../assets/images/kepo-nav.png';
import CloseNav from '../../assets/images/close-nav.png';

import './style.scss';
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";

const Navigation = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    const close = () => {
        setOpen(false);
    }
    return (
        <>
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
                    <div className="hamburger" onClick={() => handleOpen()}>
                        <img src={Menu} alt='menu' />
                    </div>
                </div>
            </div>
            <Offcanvas direction='end' isOpen={open} toggle={() => handleOpen()}>
                <OffcanvasBody>
                    <div className="close-nav" onClick={() => handleOpen()}>
                        <img src={CloseNav} alt='kepo' />
                    </div>
                    <div className="kepo">
                        <img className="w-100" src={KepoNav} alt='kepo' />
                    </div>
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
                </OffcanvasBody>
            </Offcanvas>
        </>
    )
}

export default Navigation