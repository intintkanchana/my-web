import React, { useState } from 'react'
import style from './skills.module.css'

export default function Skills() {

    const [showContentA, setShowContentA] = useState(true);
    const [showContentB, setShowContentB] = useState(false);
    const [showContentC, setShowContentC] = useState(false);

    const changeContent = (e) => {
        if (e == 1) {
            setShowContentA(true)
            setShowContentB(false)
            setShowContentC(false)
        }
        if (e == 2) {
            setShowContentA(false)
            setShowContentB(true)
            setShowContentC(false)
        }
        if (e == 3) {
            setShowContentA(false)
            setShowContentB(false)
            setShowContentC(true)
        }
    }

    return (
        <div className={style.skills}>
            <div className={style.headerleft}>
                <div className={style.header}
                    onMouseEnter={() => changeContent(1)}>&#10024; SOFTWARE &#10024;
                </div>

                <div className={style.header}
                    onMouseEnter={() => changeContent(2)}>&#10024; PROGRAMMING &#10024;
                </div>
                <div className={style.header}
                    onMouseEnter={() => changeContent(3)}>&#10024; SOFT SKILLS &#10024;
                </div>
            </div>
            <div className={style.contentright}>
                {
                    showContentA && (
                        <div className={style.content}>
                            <div>&#10154;   Figma</div>
                            <div>&#10154;   Sketch </div>
                            <div>&#10154;   Adobe XD</div>
                            <div>&#10154;   Photoshop  </div>
                            <div>&#10154;   lllustrator</div>

                        </div>
                    )
                }
                {
                    showContentB && (
                        <div className={style.content}>
                            <div>&#10154;   HTML</div>
                            <div>&#10154;   CSS</div>
                            <div>&#10154;   PHP </div>
                            <div>&#10154;   NodeJS</div>
                            <div>&#10154;   React</div>
                            <div>&#10154;   Java</div>
                            <div>&#10154;   C</div>
                            <div>&#10154;   MySQL</div>
                            <div>&#10154;   Python</div>
                        </div>
                    )
                }
                {
                    showContentC && (
                        <div className={style.content}>
                            <div>&#10154;   Priorization</div>
                            <div>&#10154;   Time Management	</div>
                            <div>&#10154;   Communication</div>
                            <div>&#10154;   Presentation</div>
                            <div>&#10154;   Responsibility</div>

                        </div>
                    )
                }


            </div>
        </div>
    )
}