
import './Navigation.css'
import {AiOutlineHome,AiOutlineUser,AiOutlineBook,AiOutlineMessage} from "react-icons/ai"
import {RiServiceLine} from "react-icons/ri"
import { useState } from 'react'

export default function Navigation(){
    const [activeClass, setActive]=useState('#')
    return(<nav>
        <a href='#'
        onClick={()=>setActive("#")}
        className={activeClass==="#"?"active":""}><AiOutlineHome/></a>
        
        <a href='#about' onClick={()=>setActive("#about")}
        className={activeClass==="#about"?"active":""}><AiOutlineUser/></a>
        <a href='#experience' onClick={()=>setActive("#experience")}
        className={activeClass==="#experience"?"active":""}><AiOutlineBook/></a>
        <a href='#services'
        onClick={()=>setActive("#services")}
        className={activeClass==="#services"?"active":""}><RiServiceLine/></a>
        <a href='#contact'
        onClick={()=>setActive("#contact")}
        className={activeClass==="#contact"?"active":""}><AiOutlineMessage/></a>
    </nav>)
}