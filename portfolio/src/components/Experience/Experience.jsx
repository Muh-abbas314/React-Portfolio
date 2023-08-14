import './Experience.css'

import {PiSealCheck} from "react-icons/pi"

export default function Experience(){
    
    const skills=["HTML","CSS","Bootstrap","JavaScript","React.js"]
    const skills2=['Node.js','php','MySQL',"MongoDB","Express"]
    const FrontElements=skills.map(item=>{
        return( <article key={item} className='experience__details'><PiSealCheck className=' experience__details-icon'/>
       <div>
         <h4>{item}</h4>
        
        <small className='text-light'>Experienced</small>
        </div></article>)
    })
    // const BackElements=skills2.map(item=>{
    //     return( <article key={item} className='experience__details'><PiSealCheck className=' experience__details-icon'/>
    //     <div className=''>
    //     <h4>{item}</h4>
    //     <small className='text-light'>Experienced</small>
    //     </div></article>)
    // })
    
    return(<section id="experience">
        <h5>Skills I have</h5>
        <h2>My Experience</h2>
        <div className='container experience__container'>
            <div className='experience__frontend'>
                <h3>Frontend Development</h3>
                <div className='experience__content'>
                {FrontElements}
                </div>
            </div>
            {/* <div className='experience__backend'>
            <h3>Backend Development</h3>
            <div className='experience__content'>
                {BackElements}
                </div>
            </div> */}
        </div>
    </section>)
}