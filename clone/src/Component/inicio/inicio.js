import styles from './inicio.module.css'

import { FcPrevious } from 'react-icons/fc'
import { FcNext } from 'react-icons/fc'
import { AiOutlineUser } from 'react-icons/ai'
import { MdPlayArrow } from 'react-icons/md'

import Slide from '../image/slide.png'

import Content_1 from '../Content/content_1'
import Content_2 from '../Content/content_2'
import Content_3 from '../Content/content_3'
import Content_4 from '../Content/content_4'
import Content_5 from '../Content/content_5'
import Content_6 from '../Content/content_6'
import Content_7 from '../Content/content_7'

import axios from 'axios'
import React, { useState, useEffect } from 'react'

function Inicio() {
    //----------- request ------------------------------    
    const url1 = "https://api.vagalume.com.br/search.php?apikey=660a4395f992ff67786584e238f501aa&art=nirvana&mus=Come%20As%20You%20Are&extra=relmus&nolyrics=1"
    const url2 = "https://api.vagalume.com.br/search.php?apikey=660a4395f992ff67786584e238f501aa&art=U2&mus=One&extra=relmus&nolyrics=1"

    
    const [music1, setMusic1] = useState([])
    const [music2, setMusic2] = useState([])

    useEffect(() => {       
        axios.get(url1)
            .then(response => {
                setMusic1(response.data.mus[0].related)
            })
        axios.get(url2)
            .then(response => {
                setMusic2(response.data.mus[0].related)
            })
    }, [])

    return (
        <div className={styles.inicio}>
            {/* Header */}
            <header className={styles.header}>
                <div>
                    <FcPrevious />
                    <FcNext />
                </div>
                <div className={styles.menu_right}>
                    <a>FAÇA UPGRADE</a>
                    <div className={styles.login}>
                        <AiOutlineUser />
                        <input tepy='text'></input>
                        <MdPlayArrow />
                    </div>
                </div>
            </header>

            <img className={styles.slide} src={Slide} alt='img'></img>

            <Content_1 music={music2} />
            <Content_2 music1={music1} music2={music2} />
            <Content_3 music1={music1} music2={music2} />
            <Content_4 music1={music1} music2={music2} />
            <Content_5 music1={music1} music2={music2} />
            <Content_6 music1={music1} />
            <Content_7 music1={music1} music2={music2} />

        </div>
    )
}
export default Inicio