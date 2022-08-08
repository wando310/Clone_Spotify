import capa from '../image/musica.jpg'
import styles from '../styleContent/content_2buscar.module.css'

import { VscChromeClose } from 'react-icons/vsc'

function Content_1() {
    return (
        <div className={styles.content1}>
            <div className={styles.title_principal}>
                <h3>Buscas recentes</h3>
                <span>ver tudo</span>
            </div>
            <div className={styles.conteiner_1_1}>
                <div className={styles.conteiner_1_2}>
                    <div className={styles.close}>X</div>
                    <img src={capa} alt="img"></img>
                    <div className={styles.conteiner_1_3}>
                        <span className={styles.title}>title</span>
                        <span className={styles.previw}>previws</span>
                    </div>
                </div>
                <div className={styles.conteiner_1_2}>
                    <div className={styles.close}>X</div>
                    <img src={capa} alt="img"></img>
                    <div className={styles.conteiner_1_3}>
                        <span className={styles.title}>title</span>
                        <span className={styles.previw}>previws</span>
                    </div>
                </div>
                <div className={styles.conteiner_1_2}>
                    <div className={styles.close}>X</div>
                    <img src={capa} alt="img"></img>
                    <div className={styles.conteiner_1_3}>
                        <span className={styles.title}>title</span>
                        <span className={styles.previw}>previws</span>
                    </div>
                </div>
                <div className={styles.conteiner_1_2}>
                    <div className={styles.close}>X</div>
                    <img src={capa} alt="img"></img>
                    <div className={styles.conteiner_1_3}>
                        <span className={styles.title}>title</span>
                        <span className={styles.previw}>previws</span>
                    </div>
                </div>
                <div className={styles.conteiner_1_2}>
                    <div className={styles.close}>X</div>
                    <img src={capa} alt="img"></img>
                    <div className={styles.conteiner_1_3}>
                        <span className={styles.title}>title</span>
                        <span className={styles.previw}>previws</span>
                    </div>
                </div>
                <div className={styles.conteiner_1_2}>
                    <div className={styles.close}>X</div>
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