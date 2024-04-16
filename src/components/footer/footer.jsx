import style from "./footer.module.css"

function Footer() {

    return (
        <div className={style.footerContainer}>
            <div className={style.divFooter}>
                <div className={style.divFooterText}>
                    Adventure Trails FD
                </div>
                <nav className={style.navFooter}>
                    <a href="#">link1</a>
                    <a href="#">link2</a>
                    <a href="#">link3</a>
                </nav>
            </div>
        </div>
    )
};

export default Footer;