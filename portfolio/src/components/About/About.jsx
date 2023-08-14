import logo from '../../assets/me-about.jpg'
import logo1 from '../../assets/react.svg'
import {FaAward} from 'react-icons/fa'
import {PiUsers} from 'react-icons/pi'
import './About.css' 
import {AiOutlineFolderOpen} from 'react-icons/ai'
export default function About()
{
    return(<section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    {/* <img src={logo}/> */}
                    <img className='react-logo' src={logo1}/>
                </div>
            </div>
            <div className='about__content'>
                <div className='about__cards'>
                    <article className='about__card'>
                        <FaAward className='about__icon'/>
                        <h5>Experience</h5>
                        <small>2+ Years Working</small>
                    </article>
                    <article className='about__card'>
                        <PiUsers className='about__icon'/>
                        <h5>Clients</h5>
                        <small>12+ Local & International</small>
                    </article>
                    <article className='about__card'>
                        <AiOutlineFolderOpen className='about__icon'/>
                        <h5>Projects</h5>
                        <small>30+ Delivered</small>
                    </article>
                </div>
                <p>
                I'm a skilled frontend developer with two years of experience, specializing in React.js. I'm passionate about creating engaging and user-centric web experiences through clean code and innovative design.
                </p>
                <a className='btn btn-primary' href='#contact'>Let's Talk</a>
            </div>

        </div>
    </section>)
}