import styles from './conteinerGeral.module.css'

import Inicio from './inicio/inicio'
import Buscar from './buscar/buscar'
import Biblioteca from './biblioteca/bibliateca'
import Playlist from './playList/playList'
import Curtidas from './curtidas/curtidas'

import ConteinerLeft from './conteinerLeft'
import ConteinerRight from './conteinerRight'
import Footer from './footer'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function conteinerGeral() {
    return (
        <div className={styles.conteinerGeral}>
            <Router>
                <ConteinerLeft />
                <Switch>
                    <Route exact path="/">
                        <Inicio />
                    </Route>
                    <Route path="/buscar">
                        <Buscar />
                    </Route>
                    <Route path="/biblioteca">
                        <Biblioteca />
                    </Route>
                    <Route path="/playlist">
                        <Playlist />
                    </Route>
                    <Route path="/curtidas">
                        <Curtidas />
                    </Route>
                </Switch>

            </Router>

            <ConteinerRight />     
            <Footer/>       

        </div>
    )
}

export default conteinerGeral;