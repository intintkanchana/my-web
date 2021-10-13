import React from 'react'
import style from './education.module.css'
import imagesa from './../../images/a.jpg'
import imagesc from './../../images/c.jpg'
import imagesd from './../../images/d.jpg'

export default function Education() {
    return (
        <div className={style.education}>

            <div className={style.columnContent}>
                <div className={style.content}>
                    PRIMARY SCHOOL
                    <div >Anubanyasothon School   </div>
                </div>
                <div className={style.img}>
                    <img src={imagesa} />
                </div>
            </div>

            <div className={style.columnContent}>
                <div className={style.content}>
                    HIGH SCHOOL
                    <div >Yasothonpittayakom School   </div>
                </div>
                <div className={style.img}>
                    <img src={imagesc} />
                </div>
            </div>

            <div className={style.columnContent}>
                <div className={style.content}>
                    BACHELOR
                    <div >King Mongkut's Institute of Technology Ladkrabang <br />
                        Information Engineering (In progress)   </div>
                </div>
                <div className={style.img}>
                    <img src={imagesd} />
                </div>
            </div>

            


        </div>
    )
}
