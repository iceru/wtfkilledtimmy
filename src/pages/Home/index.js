 import React from "react";
import Gif from '../../assets/images/gif.gif'
import Discord from '../../assets/images/discord.png';
import Twitter from '../../assets/images/twitter.png';
import Instagram from '../../assets/images/instagram.png';
import WhitePaper from '../../assets/images/white paper.png';
import Rarity from '../../assets/images/rarity.png';
import ArtSchool from '../../assets/images/art school.png';
import Mint from '../../assets/images/mint.png';
import Up from '../../assets/images/up.png';
import Down from '../../assets/images/down.png';

import './style.scss';

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="title text-center fw-bold fs-4">
                    WTFKILLEDTIMMY IS THE <br/> 
                    WORLD’S FIRST CRAYONS AND PENCILS <br/> 
                    GENERATIVE PFP NFTS1
                </div>
                <div className="gif">
                    <img src={Gif} alt="WTFKILLEDTIMMY" />
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
                <div className="text-center">
                    <a href="https://wtfkilledtimmy.gitbook.io/wtfkilledtimmy-nft-white-paper/">
                        <img src={WhitePaper} alt="White Paper" />
                    </a>
                </div>
                <div className="actions">
                    <div className="item">
                        <a href="https://rarity.wtfkilledtimy.online/guid" >
                            <img src={Rarity} alt='Rarity' />
                        </a>
                    </div>
                    <div className="item">
                        <a href="#">
                            <img src={ArtSchool} alt='Art School' />
                        </a>
                        <div>Coming Soon</div>
                    </div>
                    <div className="item">
                        <a href="#" >
                            <img src={Mint} alt='Mint' />
                        </a>
                        <div>Coming Soon</div>
                    </div>
                </div>
            </div>
            <div className="nav-control">
                <div className="up">
                    <img src={Up} alt="Up" />
                </div>
                <div className="down">
                    <img src={Down} alt="Down" />
                </div>
            </div>
        </>
    )
}

export default Home