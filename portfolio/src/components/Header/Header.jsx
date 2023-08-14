import './Header.css'
import CTA from "./CTA"
import ME from '../../assets/react.svg'
import HeaderSocials from './HeaderSocials'




export default function Header(){
    return(
        <div className='Header-flex'>
            <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Muhammad Abbas</h1>
                <h5 className="text-light">Frontend Developer</h5>
                <CTA/>
                
                <HeaderSocials/>
                <div className='me'>
                    <img className='logo' src={ME} alt=''/>
                </div>
                <a href='#contact' className='scroll__down'>Scroll Down</a>

                           </div>
        </header>
        </div>
    )
}