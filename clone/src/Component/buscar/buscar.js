import styles from './buscar.module.css'

import { FcPrevious } from 'react-icons/fc'
import { FcNext } from 'react-icons/fc'
import { AiOutlineUser } from 'react-icons/ai'
import { MdPlayArrow } from 'react-icons/md'
import { IoSearchOutline } from 'react-icons/io5'

import Content_2buscar from '../Content/content_2buscar'
import Content_3buscar from '../Content/content_3buscar'
import Content_4buscar from '../Content/content_4buscar'

import { useState } from 'react'


function Buscar() {

    const [search, setSearch] = useState('');
    console.log(search);

    return (
        <div className={styles.buscar}>
            {/* Header */}
            <header className={styles.header}>
                <div>
                    <FcPrevious />
                    <FcNext />
                </div>
                <div className={styles.search}>
                    <IoSearchOutline />
                    <input
                        className='search'
                        type='text'
                        placeholder='Artista, musicas ou Podcasts'
                        name='search'
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </div>
                <div className={styles.menu_right}>
                    <div className={styles.login}>
                        <AiOutlineUser />
                        <input tepy='text'></input>
                        <MdPlayArrow />
                    </div>
                </div>
            </header>
            <Content_2buscar />
            <Content_3buscar />
            <Content_4buscar />
        </div>

    )
}
export default Buscar