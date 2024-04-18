import style from "./home.module.css"
import Button from '@mui/material/Button'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material/styles'

const customTheme = createTheme({
    palette: {
        primary: {
            main: '#504908'
        }
    }
});

function Home() {

    return (
        <div className="container">
            <div className={style.divHome1}>
                <div className={style.divHome12}>
                    <h1 className={style.h1Home1}>Que tal aproveitar um tempo com a natureza?</h1>
                    <div className={style.divHome1Text}>
                        Junte-se à comunidade de entusiastas ao ar livre, compartilhe suas aventuras e inspire-se com as experiências de outros aventureiros. Prepare-se para explorar novos horizontes e se conectar com a natureza através do Adventure Trails!
                    </div>
                    <div>
                        <ThemeProvider theme={customTheme}>
                            <Button variant="contained" size="medium" sx={{ mt: 10}}>Explorar Trilhas</Button>
                        </ThemeProvider>
                    </div>
                </div>
            </div>
            <div className={style.divHome2}>
                <h1 className={style.h1Home2}>Explore trilhas incríveis</h1>
                <div className={style.divHome2Text}>
                    O "Adventure Trails FD" é seu portal para explorar e compartilhar as melhores trilhas para trekking e ciclismo ao redor do mundo. Descubra rotas deslumbrantes, desde caminhos tranquilos por florestas exuberantes até trilhas desafiadoras em montanhas majestosas. Encontre informações detalhadas sobre cada trilha, incluindo distância, dificuldade, pontos de interesse naturais e dicas úteis para uma experiência eco-friendly.
                </div>
                <div className={style.divHomeBtn}>
                    <ThemeProvider theme={customTheme}>
                        <Button variant="contained" size="medium" sx={{ mt: 10, mb: 10}}>Explorar Trilhas</Button>
                    </ThemeProvider>
                </div>
            </div>
            <div className={style.divHome3}>
                <div className={style.divHome31}>
                    <div className={style.divHome32}>
                        Compartilhe fotos, dicas e localização das suas trilhas favoritas
                    </div>
                    <div>
                        <ThemeProvider theme={customTheme}>
                            <Button variant="contained" size="medium" sx={{ mt: 2}} >Cadastrar nova trilha</Button>
                        </ThemeProvider>
                    </div>
                </div>
                <img className={style.imgLast} src="/home-last-picture.jpg" alt="Trilha na floresta" />
            </div>
        </div>
    )
}

export default Home;

// https://www.pexels.com/photo/footpath-in-forest-17345226/