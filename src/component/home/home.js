import React from 'react'
import style from './home.module.css'
import images from './../../images/connectme.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
    AOS.init({
        duration: 1000,
    });

    return (
        <>
        <div className={style.home}>
            <div className={style.homeleft}>
                <div data-aos="fade-right" className={style.header}>
                &#128057;  Hi,I'm Internet  &#128057; <br/>
                    Information Engineering (KMITL) 
                </div>
                <div data-aos="fade-right" className={style.content}>
                    I’m looking for a company to do internships in User Experience 
                    Design (UX) to enhance the skills and knowledge beyond college 
                    and to gain experience for future work.                         
                    I love working in the space where my mind and my hands meet 
                </div>
            </div>
            <div data-aos="fade-left" className={style.homeright}>
                 <img src={images} />
            </div>
        </div> 
        <a href="#profile" className={style.arrow}>
            <FontAwesomeIcon style={{fontSize:30}} icon={faChevronDown} />
        </a>
        </>
    )
}
