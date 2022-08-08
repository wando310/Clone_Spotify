import { BsHouseDoorFill } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import { VscLibrary } from 'react-icons/vsc'
import { IoHeartSharp } from 'react-icons/io5'
import { HiPlusSm } from 'react-icons/hi'


import { Link } from 'react-router-dom'
import styles from './conteinerLeft.module.css'


function conteinerLeft() {
    return (

        <aside className={styles.conteiner_left}>
            <div className={styles.label_menu} name='inicio'>
                ...
            </div>
            <label className={styles.label_margin} name='inicio'>
                <BsHouseDoorFill className={styles.svg} />
                <Link className={styles.teste} to='/'>Inicio</Link>
            </label>
            <label className={styles.label_margin} name='inicio'>
                <FiSearch className={styles.svg} />
                <Link className={styles.teste} to='/buscar'>Buscar</Link>
            </label>
            <label className={styles.label_margin} name='inicio'>
                <VscLibrary className={styles.svg} />
                <Link className={styles.teste} to='/biblioteca'>Suas Biblioteca</Link>
            </label>
            <div className={styles.div_plus} name='inicio'>
                <HiPlusSm className={styles.svg_plus} />
                <Link className={styles.teste} to='/playList'>PlayList</Link>
            </div>
            <div className={styles.div_margin} name='inicio'>
                <IoHeartSharp className={styles.svg_sharp} />
                <Link className={styles.teste} to='/curtidas'>Músicas Curtidas</Link>
            </div>

            <hr></hr>

            <ul>
                <li>Minha Playlist n° 5</li>
                <li>Minha Playlist n° 4</li>
                <li>Minha Playlist n° 3</li>
                <li>Minha Playlist n° 2</li>
                <li>Minha Playlist n° 1</li>
            </ul>

        </aside>
    )
}

export default conteinerLeft