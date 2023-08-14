import './Footer.css'
import {BsLinkedin, BsGithub} from 'react-icons/bs'


export default function Footer(){
    return(<footer>
        <a href='#' className='footer__logo'>.SCRIM.</a>
    <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
    </ul>
    <div className='footer__socials'>
    <a href="https://www.linkedin.com/in/muhammad-abbas-804705232/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Muh-abbas314" target="_blank"><BsGithub/></a>

    </div>
    <div className='footer__copyright'>
        <small>&copy; Copyrights 2023. All rights reserved</small>
    </div>
    </footer>)
}