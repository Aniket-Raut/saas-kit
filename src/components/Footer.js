import '../common.css';
import insta from '../assets/icons/insta.png';
import tiktok from '../assets/icons/tiktok.png';
import linkedin from '../assets/icons/linedin.png';
import pinterest from '../assets/icons/pinterest.png';
import youtube from '../assets/icons/yt.png';
import x from '../assets/icons/x.png';
import saasLogo from '../assets/icons/logosaas.png'

export const Footer=()=>{
    return(
        <footer className="responsive-container space-between pad-16-58">
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