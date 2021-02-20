import React from 'react'
import s from './AvaInfo.module.css'

const AvaInfo = () =>{
    return(
        <div className={s.logo_info}>
            <div className={s.foto}>
                <img src="https://avatarko.ru/img/kartinka/1/Crazy_Frog.jpg" alt="frog"/>
            </div>
            <div className={s.info}>
                <h2>Dmitry K</h2>
                <p>Date of Birth: 2 january</p>
                <p>Cty:Minsk</p>
                <p>Education: BSU'11</p>
                <p>Web Site: https://it-kamasutra.com</p>
            </div>
        </div>
    )
}

export default AvaInfo;