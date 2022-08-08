import style from './conteinerRigth.module.css'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'

function conteinerRight() {
    return (
        <aside className={style.conteiner_Rigth}>
            <div className={style.title}>
                <span>Atividade de amigos</span>
                <AiOutlineUserAdd/>
            </div>

            <p>Deixe seus amigos e seguidores no Spotify saberem o que você esta ouvindo.</p>

            <div className={style.galery}>
                <AiOutlineUser/>
                <div className={style.galery_div}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className={style.galery}>
                <AiOutlineUser/>
                <div className={style.galery_div}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className={style.galery}>
                <AiOutlineUser/>
                <div className={style.galery_div}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <p>Vá para "Preferências" "Redes sociais" e ative "Mostrar no Spotify
               o que eu escuto". Da pra alterar essa configuração a qualquer momento.
            </p>

            <button className={style.preferencia}>PREFERÊNCIAS</button>

        </aside>
    )
}

export default conteinerRight;