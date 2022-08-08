import styles from '../styleContent/content_2.module.css'

function Content_2
(props) {
    return (
        <div className={styles.content1}>
            <h3>Episodios para você</h3>
            <div className={styles.conteiner_1_1}>
                {

                    props.music1.map(item => (
                        <div className={styles.conteiner_1_2}>
                            <img  key={2} src={item.art.pic_medium} alt="img"></img>
                            <div className={styles.conteiner_1_3}>
                                <span  key={3} className={styles.title}>{item.art.name}</span>
                                <span  key={4} className={styles.previw}>{item.mus.name}</span>
                            </div>
                        </div>
                    ))
                }
                {
                     props.music2.map(item2 => (
                        <div className={styles.conteiner_1_2}>
                            <img  key={5}  src={item2.art.pic_medium} alt="img"></img>
                            <div className={styles.conteiner_1_3}>
                                <span key={6} className={styles.title}>{item2.art.name}</span>
                                <span key={7} className={styles.previw}>{item2.mus.name}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Content_2
