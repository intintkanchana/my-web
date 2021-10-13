
import React, { useState } from 'react'
import style from './navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHome,
    faBars, 
} from '@fortawesome/free-solid-svg-icons'
import images from './../../images/internet.png'



export default function Navbar() {
    const [display, setDisplay] = useState(false)
    const displayNav = () => {
        setDisplay(!display)
    }

    return (
        <div className={style.Container} >
            <div className={style.logo}>
                <img src={images} />
            </div>
            <div className={style.hovernav}>
                
                <a href="#profile"className={style.navlink}>PROFILE</a>
                <a href="#skills"className={style.navlink}>SKILLS</a>
                <a href="#education" className={style.navlink}>EDUCATION </a>
                <a href="#footer" className={style.navlink}>CONTACT </a>                                   
                
                
                <div className={style.bars} onClick={displayNav}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>

            {
                display && (
                    <div className={style.Containermobile}>
                        <div className={style.mobilelink}>
                            PROFILE
                        </div>
                        <div className={style.mobilelink}>
                            EDUCATION
                        </div>
                        
                        <div className={style.mobilelink}>
                            SKILLS
                        </div>
                        <div className={style.mobilelink}>
                            CONTACT
                        </div>
                    </div>
                )
            }
        </div>    
    )
}
