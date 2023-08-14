
import './Contact.css'
import {AiOutlineMail,AiOutlineWhatsApp} from 'react-icons/ai'

import  { useRef } from 'react';
// import emailjs from 'emailjs-com';

export default function Contact(){


const form=useRef()
const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3k69zsb', 'template_g06fr6b', form.current, 'xso6oNBgQBiAAcsC0')
    
  };






const data=[{logo:<AiOutlineMail className='contact__option-icon'/>,
             type:'Email',
             info:'muhabbaskhan812@gmail.com'},
            {
            logo:<AiOutlineWhatsApp className='contact__option-icon'/>,
            type:'WhatsApp',
            info:"+92 318-7969812"
            }]
const dispElements=data.map(item=>{
    return( <article key={item.type} className='contact__option'>
    {item.logo}
    <h4>{item.type}</h4>
    <h5>{item.info}</h5>
    <a href={item.type==="Email"?"mailto:muhabbaskhan812@gmail.com":"https://wa.me/923187969812"} target='_blank'>Send a message</a>
    {/* {item.info==="muhabbaskhan812@gmail.com"?(<a href='mailto:muhabbaskhan812@gmail.com'>Send a message</a>):(<></>)} */}
</article>)
})
return(<section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className='container contact__container'>
            <div className='contact__options'>
               {dispElements}
            </div>
            {/* FORM */}
            <form ref={form} onSubmit={sendEmail}>
                <input type='text' name='name' placeholder='Your Full Name' required/>
                <input type='email' name='email' placeholder='Your Email' required/>
                <textarea name='message' rows='7' placeholder='Your Message'>

                </textarea>
            <button type='submit'
            className='btn btn-primary'>Submit</button>
            </form>
            {/* FORM */}
        </div>
    </section>)
}