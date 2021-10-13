import React from 'react'
import style from './footer.module.css'
import instagram from './../../images/instagram.png'
import gmail from './../../images/gmail.png'
import facebook from './../../images/facebook.png'


export default function footer() {
    return (
        <div className={style.container}>

            <div className={style.up}>
                <div className={style.left}>
                    Hello Again! &#128150; &#128150;
                </div>
                <div className={style.right}>
                    <div className={style.right}>Thank you so much for visiting my website! You can contact and learn more about me &#128071;</div>
                </div>
            </div>

            <div className={style.down}>
                <a href="https://instagram.com/iiinternet" target="_blank" className={style.logo}>
                    <img src={instagram} />
                </a>
                <div className={style.logo}>
                    <img src={facebook} />
                </div>
                <div className={style.logo}>
                    <img src={gmail} />
                </div>
            </div>
        </div>
    )
}
