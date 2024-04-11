
import arrow from '../assets/icons/Arrow_b.svg';
import './notification.css'

export const Notification=()=>{
    return(
        <div className="notification-container">
            <div className='notification-title'>This page is included in a free SaaS Website Kit.</div>
            <span>View the complete Kit <img src={arrow}></img></span>
        </div>
    )
}