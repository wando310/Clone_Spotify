import capa from '../image/musica.jpg'
import styles from '../styleContent/content_3buscar.module.css'

import {BsChevronLeft} from 'react-icons/bs'
import {BsChevronRight} from 'react-icons/bs'

function Content_1() {
    return (
        <div className={styles.content1}>
            <div className={styles.title_principal}>
                <h3>Seus generos favoritos</h3>
            </div>
            <div className={styles.conteiner_1_1}>
                <div className={styles.conteiner_1_4}> {/*
                    <BsChevronLeft className={styles.arrow_left}/>
                    <BsChevronRight className={styles.arrow_right}/>
                */}
                    <div className={styles.conteiner_1_2}>
                        <h2>Pop</h2>
                        <div className={styles.conteiner_1_3}>
                            <img src={capa} alt="img"></img>
                        </div>
                    </div>
                    <div className={styles.conteiner_1_2}>
                        <h2>Sertanejo</h2>
                        <div className={styles.conteiner_1_3}>
                            <img src={capa} alt="img"></img>
                        </div>
                    </div>
                    <div className={styles.conteiner_1_2}>
                        <h2>Black</h2>
                        <div className={styles.conteiner_1_3}>
                            <img src={capa} alt="img"></img>
                        </div>
                    </div>
                    <div className={styles.conteiner_1_2}>
                        <h2>Pop</h2>
                        <div className={styles.conteiner_1_3}>
                            <img src={capa} alt="img"></img>
                        </div>
                    </div>
                    <div className={styles.conteiner_1_2}>
                        <h2>Pop</h2>
                        <div className={styles.conteiner_1_3}>
                            <img src={capa} alt="img"></img>
                        </div>
                    </div>
                    <div className={styles.conteiner_1_2}>
                        <h2>Pop</h2>
                        <div className={styles.conteiner_1_3}>
                            <img src={capa} alt="img"></img>
                        </div>
                    </div>
                    <div className={styles.conteiner_1_2}>
                        <h2>Pop</h2>
                        <div className={styles.conteiner_1_3}>
                            <img src={capa} alt="img"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Content_1