import React from "react";
import moment from "moment";

import './style.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="item">{`${moment().format('YYYY')} WTFKILLEDTIMMY.`}</div>
                    <div className="item">All Rights Reserved</div>
                    <a href="/" className="item">Terms & Conditions</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;