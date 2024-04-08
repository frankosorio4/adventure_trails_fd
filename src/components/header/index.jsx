import "./styles.css"

function Header(){

    return(
        <div className="headerContainer">
            <nav className="navHeader">
                <div className="headerLeft">
                    <a href="#">Adventure Trails FD</a>
                </div>
                <div className="headerRight">
                    <a href="#">Explorar Trilhas</a>
                    <a href="#">Cadastrar Trilhas</a>
                </div>
            </nav>
        </div>
    )
};

export default Header;