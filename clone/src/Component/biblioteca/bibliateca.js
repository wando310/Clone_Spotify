import styles from './biblioteca.module.css'

import { FcPrevious } from 'react-icons/fc'
import { FcNext } from 'react-icons/fc'
import { AiOutlineUser } from 'react-icons/ai'
import { MdPlayArrow } from 'react-icons/md'
import { IoSearchOutline } from 'react-icons/io5'

import Content_2biblioteca from '../Content/content_2biblioteca'

function Biblioteca() {
    return (
        <div className={styles.biblioteca}>
            {/* Header */}
            <header className={styles.header}>
                <div>
                    <FcPrevious />
                    <FcNext />
                </div>
                <div className={styles.menu}>
                    <ul>
                        <li>Playlists</li>
                        <li>Podcasts</li>
                        <li>Artista</li>
                        <li>Album</li>
                    </ul>
                </div>
                <div className={styles.menu_right}>
                    <div className={styles.login}>
                        <AiOutlineUser />
                        <input tepy='text'></input>
                        <MdPlayArrow />
                    </div>
                </div>
            </header>
            <Content_2biblioteca />
        </div>
    )
}
export default Biblioteca