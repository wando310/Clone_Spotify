import styles from '../styleContent/content_2.module.css'

function content_7(props) {
    return (
        <div key={7} className={styles.content1}>
           <h3>Paradas</h3>
            <div className={styles.conteiner_1_1}>
                {

                    props.music1.map(item => (
                        <div className={styles.conteiner_1_2}>
                            <img src={item.art.pic_medium} alt="img"></img>
                            <div className={styles.conteiner_1_3}>
                                <span className={styles.title}>{item.art.name}</span>
                                <span className={styles.previw}>{item.mus.name}</span>
                            </div>
                        </div>
                    ))
                }
                {
                     props.music2.map(item2 => (
                        <div className={styles.conteiner_1_2}>
                            <img  src={item2.art.pic_medium} alt="img"></img>
                            <div className={styles.conteiner_1_3}>
                                <span className={styles.title}>{item2.art.name}</span>
                                <span className={styles.previw}>{item2.mus.name}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default content_7