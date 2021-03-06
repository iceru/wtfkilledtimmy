import React from "react";
import {
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    UncontrolledAccordion,
} from "reactstrap";
import Countdown from "react-countdown";
import moment from "moment";

import Gif from "../../assets/images/gif.gif";
import Discord from "../../assets/images/discord.png";
import Twitter from "../../assets/images/twitter.png";
import Instagram from "../../assets/images/instagram.png";

import WhitePaper from "../../assets/images/white paper.png";
import Rarity from "../../assets/images/rarity.png";
import ArtSchool from "../../assets/images/art school.png";
import Mint from "../../assets/images/mint.png";

import Kepo from "../../assets/images/kepo.png";
import Kepo2 from "../../assets/images/Kepo 2.png";
import DateLaunch from '../../assets/images/date-launch.png';

import Arman from "../../assets/images/1-Moharmansjah.png";
import Andro from "../../assets/images/2-The Metronome.png";
import Ghina from "../../assets/images/3-divinefeminlne.png";
import Dika from "../../assets/images/4-Dikarld.png";
import Cumil from "../../assets/images/5-Cumil.png";
import Oki from "../../assets/images/6-Arief4Real.png";
import Lizzie from "../../assets/images/7-Lizzie.png";

import PFP from "../../assets/images/PFP.png";
import Solana from "../../assets/images/solana.png";
import Plus from "../../assets/images/plus-icon.png";

import "./style.scss";

const Home = () => {
    const date = moment.utc('27 May 2022 19:00');

    const faq = [
        {
            title: 'What am I & what makes me unique?',
            content: `Just like every kid in their childhood, my indulgence is to dream,
            laugh, and play with family and friends. Yes, it is that simple! (Oh,
            wish could I had it man). My uniqueness lies on the mystery where
            everyone all of sudden starts to babble, speculate, theorize about
            my existence subsequent to what has happened on July 12th, 1995.
            Some of these people who "believe" they saw me last time attempt to
            visualize me on various places from time to time (hoping that the
            surrounding community will be aware of something that is invaluable,
            which is me!). All in all, neither this mystery is going to be solved by me
            (too dumb for this) nor by my fucked-up families and bullying friends. So,
            do you still want to hear something in a grapevine? or do you rather to
            involve yourself, be a part of this uniqueness, and finally solving my
            mystery? you decide, adios!`
        },
        {
            title: 'What can you do when owning me?',
            content: `I have no word to express other than to be grateful that you care
            enough. To adopt me means you are allowed to dream, fantasize,
            influence, utilize on my ongoing imperfect journey with your own
            wisdom so as to seek something that you perceive invaluable to you,
            and who knows should we both share the same feeling to unlock the
            mystery, be it sooner or later.`
        },
        {
            title: 'Am I derived from others fellows works in NFTs universe?',
            content: `All of my families, friends, and surroundings judge that I am the
            dumbest phenomenon that has ever existed. Their ???gaslighting???
            attitude on me makes my head believe with my own stupidity that I am 
            Indeed one-of-a-kind and not like everyone else that I know in whatever
            universe (what do you reckon about me then?).`
        },
        {
            title: 'My format and size ',
            content: `Hey, you should guess it don???t you! but I was dumb enough to trust
            that I was born in .PNG file, 1987x1987 PX, and has about 8.5 ??? 9.5 MB size.`
        },
        {
            title: 'What am I & what makes me unique?',
            content: `Just like every kid in their childhood, my indulgence is to dream,
            laugh, and play with family and friends. Yes, it is that simple! (Oh,
            wish could I had it man). My uniqueness lies on the mystery where
            everyone all of sudden starts to babble, speculate, theorize about
            my existence subsequent to what has happened on July 12th, 1995.
            Some of these people who "believe" they saw me last time attempt to
            visualize me on various places from time to time (hoping that the
            surrounding community will be aware of something that is invaluable,
            which is me!). All in all, neither this mystery is going to be solved by me
            (too dumb for this) nor by my fucked-up families and bullying friends. So,
            do you still want to hear something in a grapevine? or do you rather to
            involve yourself, be a part of this uniqueness, and finally solving my
            mystery? you decide, adios!`
        },
        {
            title: 'How to adopt me?',
            content: `I was informed that you can adopt me on the wtfkilledtimmy website
            when they put me on presale. Whilst after, I will be available to adopt
            on wtfkilledtimmy website, magic eden, or monkeylabs. (Gosh, still have I
            no clue what they are on about, whatever).`
        },
        {
            title: 'where is the secondary orphanage',
            content: `For whatever reasons you believe about me, my dumbness won???t hinder
            you to place or traffic me on the Solana secondary market like Magic Eden
            and Solanart (jeez, I am so get used to be treated such that).`
        },
        {
            title: 'How much am i worth to you?',
            content: `0.987 Sol if you ask me so because my year of birth is 1987 (i feel this is
                brilliant, because i don't have to think). Does it ring everyone???s bell?`
        },

    ]

    const roadmap = [
        {
            title: 'Pre-School',
            content: `<ul>
                <li class='checked'>Gather a Team </li>
                <li class='checked'>Generate the Artworks </li>
                <li class='checked'>Set up an Instagram and Twitter </li>
                <li class='checked'>Set up Discord </li>
                <li class='checked'>Make a Roadmap, White Paper, and Tokenomics </li>
                <li>Set up Website </li>
                <li>Set up Smart Contract for DumbTimmy </li>
                <li>Set up Smart Contract for $TOYS </li>
            </ul>`
        },
        {
            title: 'First grade',
            content: `<ul><li class='checked'>Instagram AR Filter of ???Timmy is Missing??? </li>
                <li>Comic about the background story
                (first 2 pages are public, second 4 pages for holders
                only)</li>
                <li>Marketing! </li>
                <li>Recruit new Team Member/s </li>
                <li>Giveaways! </li>
                <li>Mint Day (May 27th, 2022) </li>
                <li>Set up Secondary Market </li>
                <li>3.12<span class='normalFont'>%</span> Royalties goes to Community Wallet </li>
                <li>Charity to Selected Organizations </li>
                <li>Announce Staking and Skills utility</li></ul>`
        },
        {
            title: 'Second grade',
            content: `<ul><li>Stake to create new NFTs based on DumbTimmy skills (???Toys??? NFTs) </li>
            <li>Publish Rarity Rank on Solana NFTs rarity site (MetaRarity and or Rarity Sniper) </li>
            <li>Access to print the NFTs with Timmy???s signature </li>
            <li>Giveaways!</li>
            <li>Release a 1-minute 2D Animation of DumbTimmy </li>
            <li>Special 1/1 NFT Stealth Auction on selected Solana NFT Marketplace</li></ul>`
        },
        {
            title: 'Third grade',
            content: `<ul><li>Sell new staked NFT on Secondary Market. 50 percent
            of Initial Sales distributed to new NFTs based on
            DumbTimmy skills holders, 25 percent for Community
            Wallet, 25 percent for WTFKilledTimmy Team. 3.12 percent
            Royalties goes to Community Wallet </li>
            <li>Publish new ???Toys??? NFTs rarity rank on Solana NFTs
                rarity site (MetaRarity and or Rarity Sniper) </li>
                <li>Giveaways! </li>
                <li>Release another 1-minute 2D Animation of DumbTimmy
                and his ???Toys??? NFTs </li>
                <li> Open Exclusive Merchandise Shop on Website </li></ul>`
        },
        {
            title: 'Fourth grade',
            content: `<ul><li><b>Option 1:</b> Limited 87 NFTs with Handcrafted WTFKilledTimmy
                painted and baked model compound with his attributes
                made on real fabric generated as 3D NFTs or
                <b>Option 2:</b> Limited 87 WTFKilledTimmy NFTs painted by
                children in need on the selected organization </li>
                <li>Giveaways! </li>
                <li>Mint Day in Late September or Mid October 2022
                50 WLs for DumbTimmy Holders (using $TOYS) and
                37 for Public (using $SOL) or 50 WLs for DumbTimmy
                Holders and 37 for Public (using $SOL) </li>
                <li>3.12 percent of Royalties go to Community Wallet,
                3,5 percent goes to Model Compound Artist/s the rest
                is divided from the royalty allocation chart based
                on the percentage on the royalty allocation page or
                6.87 percent for the fellow children who made the NFTs </li>
                <li> Publish new ???Handcrafted WTFKilledTimmy??? NFTs rarity rank
                on Solana NFTs rarity site (MetaRarity and or Rarity Sniper)</li></ul>`
        },
        {
            title: 'Final grade',
            content: `<ul><li>5 Minutes 2D animation of Timmy???s journey finding justice
                and his killer </li>
                <li>Free Timy looking for a new adventure with his new family</li></ul>`
        },
    ]

    const teams = [
        {
            name: "Moharmansjah",
            title: "Founder, Project Lead <br /> Main Illustrator",
            image: Arman,
            link: 'https://instagram.com/moharmansjah'
        },
        {
            name: "The Metronome",
            title: "Main Illustrator",
            image: Andro,
        },
        {
            name: "divinefeminine",
            title: "Main Illustrator",
            image: Ghina,
        },
        {
            name: "dikarld",
            title: "head of discord",
            image: Dika,
        },
        {
            name: "Cumil",
            title: "Community Moderator Social Media Manager",
            image: Cumil,
        },
        {
            name: "arief4real",
            title: "creative director",
            image: Oki,
        },
        {
            name: "Lizzie",
            title: "additional illustrator",
            image: Lizzie
        },
    ]
    return (
        <>
            <div className="home container">
                <div className="title text-center fw-bold fs-4 animate__animated animate__fadeInDown animate__delay-.5s">
                    WTFKILLEDTIMMY IS THE <br />
                    WORLD???S FIRST CRAYONS AND PENCILS <br />
                    GENERATIVE PFP NFTS
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
                    <div className="item animate__animated animate__fadeInLeft animate__delay-1s">
                        <a href="/">
                            <img src={Rarity} alt="Rarity" />
                        </a>
                        <div>Coming Soon</div>
                    </div>
                    <div className="item">
                        <a href="/">
                            <img src={ArtSchool} alt="Art School" />
                        </a>
                        <div>Coming Soon</div>
                    </div>
                    <div className="item animate__animated animate__fadeInRight animate__delay-1s">
                        <a href="/">
                            <img src={Mint} alt="Mint" />
                        </a>
                        <div>Coming Soon</div>
                    </div>
                </div>
            </div >
            <div className="background">
                <div className="container">
                    <div className="text">
                        <h3 data-aos="fade-up">Background Story</h3>
                        <p data-aos="fade-up" data-aos-delay="300">
                            ???Who The F*** Killed Timmy? That???s a mystery that we couldn???t Solve.
                            I???m announced missing by the police on July 12th, 1995, when I went to
                            play outside my father???s house. Declared legally dead seven years
                            later. <br /> <br />
                            Of all these years, I never got a freakin??? chance to go to school, so
                            everyone, including my family, starts to call me DumbTimmy. At home, I
                            always play with three things only: Origami, my self-made Toys, and
                            Carla???s Camera.
                            <br /> <br />
                            My Stepmother always blows her boyfriend in my father???s house when my
                            Dad works abroad.When my Dad got home, either he play the lottery too
                            much or he treats me like a piece of sh * t.There???s one time when he
                            drank and ran out of beer, he asked me to go to the store to get one.
                            I asked him, ???where???s the money ???? and he just beat the sh * t out of me
                            without saying anything, then calmly open my pants, and starts f *** ing
                            me.
                            <br /> <br />
                            It traumatizes me so bad and I told my adopted sister, Carla, about
                            that.When my Dad got home, Carla starts yelling to my Dad about how
                            f *** ed up he is, but she ended up just like me, with her messy hair
                            and sticky face.I noticed that she can???t even walk straight for three
                            days.??? -Timy
                        </p >
                    </div >
                </div >
                <div className="kepo" >
                    <img data-aos="fade-left" src={Kepo} alt='kepo' />
                </div>
            </div >

            <div className="container">
                <div className="roadmap" data-aos="fade-right">
                    <h3>Roadmap</h3>
                    <UncontrolledAccordion stayOpen>
                        {roadmap.map((item, key) => {
                            return (
                                <AccordionItem>
                                    <AccordionHeader targetId={`${key}`}>
                                        <div className="icon-plus">
                                            <img src={Plus} alt='expand' />
                                        </div>
                                        <div className="title">
                                            {item.title}
                                        </div>
                                    </AccordionHeader>
                                    <AccordionBody accordionId={`${key}`} >
                                        <div dangerouslySetInnerHTML={{ __html: item.content }} />
                                    </AccordionBody>
                                </AccordionItem>
                            )
                        })}
                    </UncontrolledAccordion>
                </div>
            </div>

            <div className="launching">
                <div className="content">
                    <div className="text" data-aos="fade-down">
                        Launching Soon...
                    </div>
                    <div className="date-launch" data-aos="fade-down" data-aos-delay="300">
                        <img src={DateLaunch} alt='launch' />
                    </div>
                    <div className="countdown" data-aos="fade-down" data-aos-delay="500">
                        <Countdown date={date} renderer={props =>
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="item">
                                    <div className="title">Days</div>
                                    {props.days}
                                </div>
                                <div className="item separator">:</div>
                                <div className="item">
                                    <div className="title">Hours</div>
                                    {props.hours}
                                </div>
                                <div className="item separator">:</div>
                                <div className="item">
                                    <div className="title">Minutes</div>
                                    {props.minutes}
                                </div>
                                <div className="item separator">:</div>
                                <div className="item">
                                    <div className="title">Seconds</div>
                                    {props.seconds}
                                </div>
                            </div>} />
                    </div>
                </div>
                <div className="kepo-2"  >
                    <img data-aos="fade-right" data-aos-delay="500" src={Kepo2} alt='kepo-2' />
                </div>
            </div>
            <div className="container">
                <div className="faq" data-aos="fade-right">
                    <h4>FAQ</h4>
                    <UncontrolledAccordion stayOpen>
                        {faq.map((item, key) => {
                            return (
                                <AccordionItem>
                                    <AccordionHeader targetId={`${key}`}>
                                        <div className="icon-plus">
                                            <img src={Plus} alt='expand' />
                                        </div>
                                        <div className="title">
                                            {item.title}
                                        </div>
                                    </AccordionHeader>
                                    <AccordionBody accordionId={`${key}`} >
                                        <div dangerouslySetInnerHTML={{ __html: item.content }} />
                                    </AccordionBody>
                                </AccordionItem>
                            )
                        })}
                    </UncontrolledAccordion>
                </div>
                <div className="team">
                    <h4>Team</h4>
                    <div className="items">
                        {
                            teams.map((item) => {
                                return (
                                    <div onClick={() => { window.location.href = item.link }} style={{ cursor: item.link ? 'pointer' : 'auto' }} className="team-item" data-aos="flip-right">
                                        <div className="team-img">
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                        <div className="team-name">
                                            {item.name}
                                        </div>
                                        <div className="team-title">
                                            <div dangerouslySetInnerHTML={{ __html: item.title }} />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="cta">
                    <h1 data-aos="fade-down">which timy are you?</h1>

                    <div className="row first-row">
                        <div className="col-12 col-lg-6">
                            <a href="https://discord.gg/mgTURNpJ3v" className="pfp" data-aos="zoom-in-right">
                                <img src={PFP} alt='PFP' />
                            </a>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="join" data-aos="zoom-in-left">
                                join my discord
                                to know me better
                            </div>
                        </div>
                    </div>
                    <div className="row last-row">
                        <div className="col-12 col-lg-6 about" data-aos="zoom-in-right">
                            WTFKilledTimmy is the world???s first deflationary
                            hand-drawn generative collection of 870 NFTs
                            made using crayons & pencils that rested in peace on SOLana blockchain.
                        </div>
                        <div className="col-12 col-lg-6 solana" data-aos="zoom-in-left">
                            <a href="https://solana.com" target='_blank' rel='noreferrer'>
                                <img src={Solana} alt='PFP' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Home;
