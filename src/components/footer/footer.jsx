import style from "./footer.module.css";

function Footer() {

    return (
        <div className={style.footerContainer}>
            <div className={style.divFooter}>
                <div className={style.divFooterText}>
                    Adventure Trails FD
                </div>
                <nav className={style.navFooter}>
                    <a href="https://github.com/" target="_blank">
                        <i className='bx bxl-github bx-sm' style={{ color: 'white' }}></i>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank">
                        <i className='bx bxl-linkedin bx-sm' style={{ color: 'white' }}></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                        <i className='bx bxl-instagram-alt bx-sm' style={{ color: 'white' }}></i>
                    </a>
                </nav>
            </div>
        </div>
    )
};

export default Footer;

//https://boxicons.com/
//sizes bx-xs  bx-sm  bx-md  bx-lg