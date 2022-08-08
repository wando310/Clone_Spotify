import styles from '../styleContent/content_2.module.css'

function content_6(props) {
    return (
        <div key={6} className={styles.content1}>
           <h3>Feito pra você</h3>
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
            </div>
        </div>
    )
}
export default content_6