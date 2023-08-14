import './Services.css'
import {BiCheck} from "react-icons/bi"

export default function Services(){

    const uiExperience=["Typography & Color Theory",
"Layout & Composition",
"Responsive & Mobile Design",
"Usability Testing & User Feedback",
"Interaction Design"]

const webDev=["Custom Website Development",
"Wordpress Website Builders",
"Template Based Websites",
"Custom Web Application",
"Static Website Development"]
    const DispUi=uiExperience.map(item=>{
        return(<li key={item}>
            <BiCheck className='services__list-icon'/>
            <p>{item}</p>
            </li>)
    })
    const WebDev=webDev.map(item=>{
        return(<li key={item}>
            <BiCheck className='services__list-icon'/>
            <p>{item}</p>
            </li>)
    })
    // const ContentCreation=uiExperience.map(item=>{
    //     return(<li key={item}>
    //         <BiCheck className='services__list-icon'/>
    //         <p>{item}</p>
    //         </li>)
    // })

    return(<section id="services">
    <h5>What I Offer</h5>
    <h2>Services</h2>
    <div className='container services__container'>
        <article className='service'>
            <div className='service__head'>
                <h3>UI/UX Design</h3>
            </div>
            <ul className='service__list'>
            {DispUi}
            </ul>
        </article>
        {/* END OF UI/UX */}
        <article className='service'>
            <div className='service__head'>
                <h3>Web Development</h3>
            </div>
            <ul className='service__list'>
            {WebDev}
            </ul>
        </article>
        {/* END OF WEB DEV */}
        {/* <article className='service'>
            <div className='service__head'>
                <h3>Content Creation</h3>
            </div>
            <ul className='service__list'>
            {ContentCreation}
            </ul>
        </article> */}
    </div>
    <div className='spacing'>
    
    </div>
    </section>)
}