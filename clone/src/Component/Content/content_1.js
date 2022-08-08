
import styles from '../styleContent/content_1.module.css'
import { IoPlaySharp } from 'react-icons/io5'

function Content_1(props) {
    return (
        <div key={1} className={styles.content1}>
            <h2>Boa tarde</h2>
            <div className={styles.conteiner_1_1}>
                {
                    props.music.map((item) => (
                        <div className={styles.conteiner_1_2}>
                            <img src={item.art.pic_medium} alt="img"></img>
                            <div className={styles.conteiner_1_3}>
                                <span>{item.art.name}</span>
                                <span>{item.mus.name}</span>
                            </div>
                            <IoPlaySharp />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Content_1