import styles from './curtidas.module.css'

import { FcPrevious } from 'react-icons/fc'
import { FcNext } from 'react-icons/fc'
import { AiOutlineUser } from 'react-icons/ai'
import { MdPlayArrow } from 'react-icons/md'
import {BiSearch} from 'react-icons/bi'
import {VscChromeClose} from 'react-icons/vsc'
import {FaHeart} from 'react-icons/fa'

function Curtidas(){
    return (
        <div className={styles.playlist}>
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

            <div className={styles.menu_playlist}>
                <div className={styles.photo}>
                    <FaHeart/>
                </div>
                <div className={styles.play}>
                    <span>PLAYLIST</span>
                    <h2>Músicas Curtidas</h2>
                    <span>h03004kiij27rvewhnl - 2 músicas</span>
                </div>
            </div>
            <div className={styles.point_menu}>...</div>

            <div className={styles.increment_playlist}>
                <div className={styles.search}>
                    <h3>Vamos incrementar sua playlist</h3>
                    <div className={styles.play_search}>
                        <BiSearch/>
                        <input placeholder='Buscar múdicas ou episódios'></input>
                    </div>
                </div>
                <VscChromeClose />
            </div>
        </div>
    )
}
export default Curtidas