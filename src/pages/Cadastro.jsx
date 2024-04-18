import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import style from "./cadastro.module.css"
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material/styles'

function Cadastro() {

    const customTheme = createTheme({
        palette: {
            primary: {
                main: '#504908'
            }
        }
    });

    return (
        <div className = "container">
            <h1 className="titulo">Cadastro de nova Trilha</h1>
            <form className={style.divForm}>
                <div className={style.divTextField1}>
                    <div>Nome da trilha</div>
                    <TextField id="nome-trilha" sx={{ mt: 1}} label="Digite o nome da trilha" variant="outlined"/>
                </div>
                <div className={style.divTextField2}>
                    <div>
                        <div>Duraçao estimada (min)</div>
                        <TextField id="duracao-trilha"  sx={{ mt: 1, width:'18em'}} label="Digite a duracao em minutos" variant="outlined" />
                    </div>
                    <div>
                        <div>Trajeto (Km)</div>
                        <TextField id="duracao-trilha" sx={{ mt: 1, width:'18em'}} label="Digite a distancia em Km" variant="outlined" fullWidth/>
                    </div>
                </div>
                <div className={style.divTextField2}>
                    <div>
                        <div>Cidade</div>
                        <TextField id="cidade-trilha" sx={{ mt: 1, width:'18em'}} label="Digite o nome da cidade" variant="outlined"/>
                    </div>
                    <div>
                        <div>Estado</div>
                        <TextField id="estado-trilha" sx={{ mt: 1, width:'18em'}} label="Digite o estado" variant="outlined"/>
                    </div>
                </div>
                <div className={style.divTextField2}>
                    <div>
                        <div>Nome completo usuário</div>
                        <TextField id="nome-usuario" sx={{ mt: 1, width:'18em'}} label="Seu nome completo" variant="outlined"/>
                    </div>
                    <div>
                        <div>Dificudade</div>
                        <TextField id="dificudade-trilha" sx={{ mt: 1, width:'18em'}} label="Iniciante" variant="outlined"/>

                    </div>
                </div>
                <div className={style.divTextField1}>
                    <div>Tipo de tiilha</div>
                    <TextField id="tipo-trilha" sx={{ mt: 1}} label="Caminhada/trekking" variant="outlined"/>
                </div>
                <div className={style.divTextField1}>
                    <div>Url imagen da trilha</div>
                    <TextField id="url-imagen-trilha" sx={{ mt: 1}} label="Caminhada/trekking" variant="outlined"/>
                </div>
                <div className={style.divBtn}>
                    <ThemeProvider theme={customTheme}>
                        <Button variant="contained" sx={{ fontWeight:'bold'}}>Cadastrar</Button>
                        <Button variant="outlined" sx={{ fontWeight:'bold'}}>Voltar</Button>
                    </ThemeProvider>
                </div>
            </form>
        </div>
    )
  }
  
  export default Cadastro;