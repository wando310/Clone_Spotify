import styles from './footer.module.css'
import {IoIosPause} from 'react-icons/io'
import {GiNextButton} from 'react-icons/gi'
import {GiPreviousButton} from 'react-icons/gi'
import {FiRepeat} from 'react-icons/fi'
import {FaRandom} from 'react-icons/fa'

function footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.player}>
                <FaRandom/>
                <GiPreviousButton className={styles.next_previwer}/>
                <IoIosPause className={styles.pause}/>
                <GiNextButton className={styles.next_previwer}/>
                <FiRepeat/>
            </div>
            <div className={styles.time}>
                <span className='start'>0:00</span>
                <div></div>
                <span className='and'>0:00</span>
            </div>
        </footer>
    )
}

export default footer;