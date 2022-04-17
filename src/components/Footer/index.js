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
                    <a href="https://docs.google.com/document/d/12d5SXGIDPRC-WOJbdA4YILk0f1MwrH9t" className="item">Terms & Conditions</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;