import capa from '../image/music_icon.png'
import styles from '../styleContent/content_2biblioteca.module.css'

import { BiPlay } from 'react-icons/bi'
import { IoSearch } from 'react-icons/io5'
import { IoMdCheckmark } from 'react-icons/io'


function Content_1() {
    return (
        <div className={styles.content1}>
            <div className={styles.title_principal}>
                <h3>Playlists</h3>
                <div className={styles.option}>
                    <div>
                        <IoSearch />
                        <span>Mais relevante</span>
                        <BiPlay />
                    </div>
                    <ul>
                        <li>Mais relevante<IoMdCheckmark /></li>
                        <li>Tocado recentimente<IoMdCheckmark /></li>
                        <li>Adicionado recentimente<IoMdCheckmark /></li>
                        <li>Ordem alfabética<IoMdCheckmark /></li>
                        <li>Ordem personalizada<IoMdCheckmark /></li>
                    </ul>
                </div>
            </div>
            <div className={styles.conteiner_1_1}>
                <div className={styles.conteiner_1_4}>
                    <p>JapinhaConde Romance Desapegado .
                        Zeze Di Camargo e Lucivano Saudades
                    </p>
                    <h2>Músicas Curtidas</h2>
                    <span>2 músicas curtidas</span>
                    <BiPlay />
                </div>
                <div className={styles.conteiner_1_2}>
                    <BiPlay />
                    <img src={capa} alt="img"></img>
                    <div className={styles.conteiner_1_3}>
                        <span className={styles.title}>title</span>
                        <span className={styles.previw}>previws</span>
                    </div>
                </div>
                <div className={styles.conteiner_1_2}>
                    <BiPlay />
                    <img src={capa} alt="img"></img>
                    <div className={styles.conteiner_1_3}>
                        <span className={styles.title}>title</span>
                        <span className={styles.previw}>previws</span>
                    </div>
                </div>
                <div className={styles.conteiner_1_2}>
                    <BiPlay />
                    <img src={capa} alt="img"></img>
                    <div className={styles.conteiner_1_3}>
                        <span className={styles.title}>title</span>
                        <span className={styles.previw}>previws</span>
                    </div>
                </div>
                <div className={styles.conteiner_1_2}>
                    <BiPlay />
                    <img src={capa} alt="img"></img>
                    <div className={styles.conteiner_1_3}>
                        <span className={styles.title}>title</span>
                        <span className={styles.previw}>previws</span>
                    </div>
                </div>
                <div className={styles.conteiner_1_2}>
                    <BiPlay />
                    <img src={capa} alt="img"></img>
                    <div className={styles.conteiner_1_3}>
                        <span className={styles.title}>title</span>
                        <span className={styles.previw}>previws</span>
                    </div>
                </div>
                <div className={styles.conteiner_1_2}>
                    <BiPlay />
                    <img src={capa} alt="img"></img>
                    <div className={styles.conteiner_1_3}>
                        <span className={styles.title}>title</span>
                        <span className={styles.previw}>previws</span>
                    </div>
                </div>
                <div className={styles.conteiner_1_2}>
                    <BiPlay />
                    <img src={capa} alt="img"></img>
                    <div className={styles.conteiner_1_3}>
                        <span className={styles.title}>title</span>
                        <span className={styles.previw}>previws</span>
                    </div>
                </div>
                <div className={styles.conteiner_1_2}>
                    <BiPlay />
                    <img src={capa} alt="img"></img>
                    <div className={styles.conteiner_1_3}>
                        <span className={styles.title}>title</span>
                        <span className={styles.previw}>previws</span>
                    </div>
                </div>
                <div className={styles.conteiner_1_2}>
                    <BiPlay />
                    <img src={capa} alt="img"></img>
                    <div className={styles.conteiner_1_3}>
                        <span className={styles.title}>title</span>
                        <span className={styles.previw}>previws</span>
                    </div>
                </div>
                <div className={styles.conteiner_1_2}>
                    <BiPlay />
                    <img src={capa} alt="img"></img>
                    <div className={styles.conteiner_1_3}>
                        <span className={styles.title}>title</span>
                        <span className={styles.previw}>previws</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Content_1