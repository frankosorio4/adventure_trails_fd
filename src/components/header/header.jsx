import style from "./header.module.css"
import {Link} from "react-router-dom"

function Header(){

    return(
        <div className={style.headerContainer}>
            <nav className={style.navHeader}>
                <div className={style.headerLeft}>
                    <Link  to="/">Adventure Trails FD</Link>
                </div>
                <div className={style.headerRight}>
                    <Link  to="/listatrilhas">Explorar Trilhas</Link>
                    <Link  to="/cadastro">Cadastrar Trilhas</Link>
                </div>
            </nav>
        </div>
    )
};

export default Header;