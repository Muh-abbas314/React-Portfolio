import './Portfolio.css'
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'
import img4 from '../../assets/portfolio4.jpg'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.jpg'


export default function Portfolio(){
    
    const imgArray=[img1,img2,img3,img4,img5,img6]
    const DispPortfolio=imgArray.map(item=>{
        return(<article key={item} className='portfolio__item'>
        <div className='portfolio__item-image'>
            <img src={item}/>
        </div>
        <h3>This is a portfolio item title</h3>
        <div className='portfolio__item-cta'>
        <a href='https://github.com/Muh-abbas314'
        target='_blank'
        className='btn'>
        GitHub
        </a>
        <a href='https://dribble.com/Alien_pixels'
        className='btn btn-primary'
        target='_blank'>
        Live Demo
        </a>
        </div>
    </article>)
    })
    
    
    return(<section id="portfolio">
        <div className='spacing'>

        </div>
         <h5>My Recent Work</h5>
         <h2>Portfolio</h2>
         <div className='container portfolio__container'>
            {DispPortfolio}
         </div>
         </section>)
}