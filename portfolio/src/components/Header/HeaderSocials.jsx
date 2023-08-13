import {BsLinkedin, BsGithub} from 'react-icons/bs'

export default function HeaderSocials()
{
    return(<div className="header__socials">
        <a href="https://www.linkedin.com/in/muhammad-abbas-804705232/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Muh-abbas314" target="_blank"><BsGithub/></a>
        {/* <a href="https://www.linkedin.com/in/muhammad-abbas-804705232/" target="_blank"></a > */}
    </div>)
}