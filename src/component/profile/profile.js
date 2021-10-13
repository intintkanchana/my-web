import React from 'react'
import style from './profile.module.css'
import images from './../../images/propic.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Profile() {

    AOS.init({
        duration: 1000,
    });

    return (
        <div className={style.profile}>

            <div data-aos="fade-right" className={style.profileleft}>
            <img src={images} />
            </div>
         

            <div className={style.profileright}>

                
                <div className={style.boxmainWarp}>
                    <div className={style.boxmain}>
                        NAME &#128027;
                    </div>
                </div>
                
                <div className={style.box}>
                        Kanchana Prathumwan 
                </div>

                <div className={style.boxmainWarp}>
                    <div className={style.boxmain}>
                        BIRTHDAY &#128035;
                </div>
                </div>
                
                <div className={style.box}>
                        25th June 2001  
                </div>

                <div className={style.boxmainWarp}>
                    <div className={style.boxmain}>
                        ADDRESS &#127968;
                </div>
                </div>
                
                <div className={style.box}>
                        3/161 soi3 Nirunvil10, Bangna-trad road km.29, Bangchalong <br/>
                        Sub-district, Sub-area Bangplee, Samut Prakan Province 10540  
                </div>
               
                    
                
            </div>


            
        </div>
    )
}
