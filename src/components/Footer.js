import '../common.css';
import insta from '../assets/icons/Socials_1.svg';
import tiktok from '../assets/icons/Socials_4.svg';
import linkedin from '../assets/icons/Socials_3.svg';
import pinterest from '../assets/icons/Socials_2.svg';
import youtube from '../assets/icons/Socials_5.svg';
import x from '../assets/icons/Socials.svg';
import saasLogo from '../assets/icons/logosaas.png'

export const Footer=()=>{
    return(
        <footer className="responsive-container space-between pad-16-58 mobile-flex">
            <div className='font-14'>@ 2024 Your Company, Inc. All rights reserved</div>
            <div className='footer-connections'>
                <img src={x}></img>
                <img src={insta}></img>
                <img src={pinterest}></img>
                <img src={linkedin}></img>
                <img src={tiktok}></img>
                <img src={youtube}></img>
            </div>
        </footer>
    )
}