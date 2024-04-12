import { Navbar } from "../components/Navbar"
import './home.css'
import '../common.css'
import arrow from '../assets/icons/Arrow_w.svg'
import send from '../assets/icons/cursor.png'
import message from '../assets/icons/message.png'
import ellipse from '../assets/icons/Ellipse.svg'
import acme from '../assets/icons/acme.png';
import quantum from '../assets/icons/quantum.png';
import echoValley from '../assets/icons/echo.png';
import clestial from '../assets/icons/celestia.png';
import pulse from '../assets/icons/pulse.png';
import apex from '../assets/icons/apex.png';
import echo from '../assets/icons/Ecosystem.svg'
import window_ss from '../assets/icons/App_ss.png'
import { useState } from "react"
import expand from '../assets/icons/Frame.svg'

import pie from '../assets/icons/emojistar.png';
import gear from '../assets/icons/helix.png'


export const Home=()=>{
    return(
        <div>
            <Hero></Hero>
            <BrandsSection/>
            <InfoSection/>
            <InterfaceSection/>
            <FAQSection/>
            <SubscribeSection/>
        </div>
    )
}

export const Hero=()=>{
    return(
        <div className="hero-container gradient-dark">
            <div className="version-btn">Version 2.0 is here <span>Read more<img src={arrow}></img></span></div>
            <h1 className="hero-headline relative">
                <img className="overlay cursor-img" width={"200px"} src={send}></img>
                <img className="overlay messege" src={message}></img>
                One task at a time
            </h1>
            <div className="hero-body">Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your success.</div>
            <div className="ellipse-section">
                <img src={ellipse}></img>
                <button className="button-dark">Get for free</button>
            </div>
        </div>
    )
}

const BrandsSection=()=>{
    return(
        <div className="dark-background flex-col pad-top-bot-26 gap28">
            <div className="lightdark-fonts w400 s14 lh17">Trusted by the world's most innovative teams</div>
            <div className="brands-logo-holder">
                <img src={acme}></img>
                <img src={quantum}></img>
                <img src={echoValley}></img>
                <img src={clestial}></img>
                <img src={pulse}></img>
                <img src={apex}></img>
            </div>
        </div>
    )
}
const InfoSection=()=>{
    return(
        <section className="dark-background flex-col pad-top-bot-26 gap28">
            <div className="section-content">
                <h2 className="section-header">Everything you need</h2>
                <div className="section-subheader">Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.</div>
            </div>
            <div className="card-holder">
                <Card img={echo} title={"Integration ecosystem"} description={"Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place."}></Card>
                <Card img={echo} title={"Goal setting and tracking"} description={"Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight."}></Card>
                <Card img={echo} title={"Secure data encryption"} description={"With end-to-end encryption, your data is securely stored and protected from unauthorized access."}></Card>
            </div>
        </section>
    )
}
const InterfaceSection=()=>{
    return(
        <section className="dark-gardient-background flex-col pad-top-bot-26 gap36">
            <div className="section-content">
                <h2 className="section-header">Intuitive interface</h2>
                <div className="section-subheader">Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes, one task at a time.</div>
            </div>
            <div className="window-image">
                <img src={window_ss}></img>
            </div>
        </section>
    )
}

const FAQSection=()=>{
    return(
        <section className="dark-gardient-background-reverse flex-col pad-top-bot-26 gap36">
            <div className="section-content">
                <h2 className="section-header">Frequently asked questions</h2>
            </div>
            <div className="faq-section">
                <Accordion/>
                <Accordion/>
                <Accordion/>
                <Accordion/>
            </div>
        </section>
    )
}

const SubscribeSection=()=>{
    return(
        <section className="dark-background flex-col pad-top26 bot-26 overflow-hidden">
            <div className="flex-col gap36 relative max-w540">
                <div className="section-content max-w447">
                    <img className="overlay pie" src={pie}></img>
                    <img className="overlay helix" src={gear}></img>
                    <h2 className="section-header">Get instant access</h2>
                    <div className="section-subheader fonts16 light-grey">Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</div>
                </div>
                <div className="input-container">
                    <input placeholder="name@email.com" type="email"></input>
                    <button>Get aceess</button>
                </div>
            </div>
        </section>
    )
}

const Accordion=()=>{
    const[expanded,setExpanded] = useState(false);
    const toggleExpand = ()=>{
        setExpanded(!expanded)
    }
    return(
        <div className='accordion-container'>
            <div onClick={toggleExpand} className='accordion-heading'>
                <div>How does the pricing work for teams</div>
                <img src={expand}></img>
            </div>
            {
                expanded ? <div>Lorem ipsum dolor sit amet consectetur. Porta velit ultricies feugiat tortor odio. Scelerisque habitant quam pharetra adipiscing id ipsum et lectus malesuada.</div> : null
            }
        </div>
    )
}

const Card=({img,title,description})=>{
    return(
        <div className="card-dark-container">
            <div className="card-image-holder">
                <img src={img}></img>
            </div>
            <div className="card-content">
                <div className="card-title">{title}</div>
                <div className="card-description">{description}</div>
            </div>
        </div>
    )
}