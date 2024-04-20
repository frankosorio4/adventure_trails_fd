import React from 'react'
import TextField from '@mui/material/TextField'
import { Select, InputLabel, MenuItem, FormControl } from '@mui/material'
import Button from '@mui/material/Button'
import style from "./cadastro.module.css"
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material/styles'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'

function Cadastro() {

    const customTheme = createTheme({
        palette: {
            primary: {
                main: '#504908'
            }
        }
    });

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    function onSubmit(formValues) {
        console.log(formValues);
        // navigate("/lista-trilhas");
    };

    return (
        <div className="container">
            <h1 className="titulo">Cadastro de nova Trilha</h1>

            <ThemeProvider theme={customTheme}>
                <form className={style.divForm} onSubmit={handleSubmit(onSubmit)}>

                    <div className={style.divTextField1}>
                        <div>Nome da trilha</div>
                        <TextField
                            id="nome-trilha"
                            sx={{ mt: 1 }}
                            // label="Digite o nome da trilha"
                            variant="outlined"
                            {...register("nomeTrilha",
                                {
                                    required: "Campo Obrigatorio",
                                    minLength: {
                                        value: 1,
                                        message: "Minimo 5 careateres"
                                    },
                                    maxLength: {
                                        value: 100,
                                        message: "Maximo de 100 carateres"
                                    }
                                }
                            )
                            }
                        />
                        {errors.nomeTrilha && <p>{errors.nomeTrilha.message}</p>}
                    </div>

                    <div className={style.divTextField2}>
                        <div>
                            <div>Cidade</div>
                            <TextField
                                id="cidade-trilha"
                                sx={{ mt: 1, width: '18em' }}
                                // label="Digite o nome da cidade"
                                variant="outlined"
                                {...register("cidade",
                                    {
                                        required: "Campo Obrigatorio",
                                        minLength: {
                                            value: 1,
                                            message: "Minimo 3 careateres"
                                        },
                                        maxLength: {
                                            value: 60,
                                            message: "Maximo de 60 carateres"
                                        }
                                    }
                                )
                                }
                            />
                            {errors.cidade && <p>{errors.cidade.message}</p>}
                        </div>

                        <div>
                            <div>Estado</div>
                            <TextField
                                id="estado-trilha"
                                sx={{ mt: 1, width: '18em' }}
                                // label="Digite o estado"
                                variant="outlined"
                                {...register("estado",
                                    {
                                        required: "Campo Obrigatorio",
                                        minLength: {
                                            value: 1,
                                            message: "Minimo 2 careateres"
                                        },
                                        maxLength: {
                                            value: 2,
                                            message: "Maximo de 2 carateres"
                                        }
                                    }
                                )
                                }
                            />
                            {errors.estado && <p>{errors.estado.message}</p>}
                        </div>
                    </div>

                    <div className={style.divTextField2}>
                        <div>
                            <div>Duraçao estimada (min)</div>
                            <TextField
                                id="duracao-trilha"
                                type="number"
                                sx={{ mt: 1, width: '18em' }}
                                // label="Digite a duracao em minutos"
                                variant="outlined"
                                {...register("duracao",
                                    {
                                        required: "Campo Obrigatorio",
                                        minLength: {
                                            value: 2,
                                            message: "Minimo 2 careateres"
                                        },
                                        maxLength: {
                                            value: 4,
                                            message: "Maximo de 4 carateres"
                                        }
                                    }
                                )
                                }
                            />
                            {errors.duracao && <p>{errors.duracao.message}</p>}
                        </div>

                        <div>
                            <div>Trajeto (Km)</div>
                            <TextField
                                id="Trajeto-trilha"
                                type="number"
                                step={0.01}
                                sx={{ mt: 1, width: '18em' }}
                                // label="Digite a distancia em Km"
                                variant="outlined"
                                {...register("trajeto",
                                    {
                                        required: "Campo Obrigatorio",
                                        minLength: {
                                            value: 1,
                                            message: "Minimo 1 careateres"
                                        },
                                        maxLength: {
                                            value: 4,
                                            message: "Maximo de 4 carateres"
                                        }
                                    }
                                )
                                }
                            />
                            {errors.trajeto && <p>{errors.trajeto.message}</p>}
                        </div>
                    </div>

                    <div className={style.divTextField2}>
                        <div>
                            <div>Dificudade</div>
                            <Select
                                // value=""
                                defaultValue=""
                                sx={{ mt: 1, width: '18em' }}
                                {...register('dificuldade',
                                    { required: true }
                                )}
                            >
                                <MenuItem value="Iniciante">Iniciante</MenuItem>
                                <MenuItem value="Intermediário">Intermediário</MenuItem>
                                <MenuItem value="Difícil">Difícil</MenuItem>
                            </Select>
                        </div>
                        <div>
                            <div>Tipo de Trilha</div>
                            <Select
                                // value=""
                                defaultValue=""
                                sx={{ mt: 1, width: '18em' }}
                                {...register('tipo',
                                    { required: true }
                                )}
                            >
                                <MenuItem value="Caminhada">Caminhada</MenuItem>
                                <MenuItem value="Trekking">Trekking</MenuItem>
                                <MenuItem value="Bicicleta">Bicicleta</MenuItem>
                            </Select>
                        </div>
                    </div>

                    <div className={style.divTextField1}>
                        <div>Nome completo usuário</div>
                        <TextField
                            id="nome-usuario"
                            sx={{ mt: 1 }}
                            // label="Seu nome completo"
                            variant="outlined"
                            {...register("nomeUsuario",
                                {
                                    required: "Campo Obrigatorio",
                                    minLength: {
                                        value: 5,
                                        message: "Minimo 5 careateres"
                                    },
                                    maxLength: {
                                        value: 60,
                                        message: "Maximo de 60 carateres"
                                    }
                                }
                            )
                            }
                        />
                        {errors.nomeUsuario && <p>{errors.nomeUsuario.message}</p>}
                    </div>

                    <div className={style.divTextField1}>
                        <div>Url imagen da trilha</div>
                        <TextField
                            id="url-imagen-trilha"
                            sx={{ mt: 1 }}
                            // label="Url da imagen"
                            variant="outlined"
                            {...register("urlImagen",
                                {
                                    required: "Campo Obrigatorio",
                                    minLength: {
                                        value: 10,
                                        message: "Minimo 10 careateres"
                                    },
                                    maxLength: {
                                        value: 300,
                                        message: "Maximo de 300 carateres"
                                    }
                                }
                            )
                            }
                        />
                        {errors.urlImagen && <p>{errors.urlImagen.message}</p>}
                    </div>

                    <div className={style.divBtn}>
                        <Button
                            type='submit'
                            variant="contained"
                            sx={{ fontWeight: 'bold' }}
                        >Cadastrar
                        </Button>
                        <Button
                            variant="outlined"
                            sx={{ fontWeight: 'bold' }}
                            onClick={() => navigate("/")}
                        >Voltar
                        </Button>
                    </div>
                </form>
            </ThemeProvider>
        </div >
    )
}

export default Cadastro;


//<div>
//<div>Dificudade</div>
//{/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
//<FormControl>
//    <Select
//        //value={dificuldade}// Set default value
//        sx={{ mt: 1, width: '18em' }}
//onChange={handleChange}
//        {...register("dificuldade")}
//     {required: "Campo Obrigatorio"} ) }
//    >
//        {/* <MenuItem value=""><em>None</em></MenuItem> */}
//        <MenuItem value="Iniciante">Iniciante</MenuItem>
//        <MenuItem value="Intermediário">Intermediário</MenuItem>
//        <MenuItem value="Difícil">Difícil</MenuItem>
//    </Select>
//</FormControl>
//</div>

//Validacao
// Nome da trilha: string-required-100 caracteres;
// Cidade: string-required-60 caracteres;
// Estado: string-required-2 caracteres;
// Duração estimada: number-required- 4 caracteres;
// Trajeto: number-required- 5 caracteres;
// Dificuldade: select-require-options: Iniciante, Intermediário e Difícil.
// tipo: select-require-options:: Caminhada e Trekking;
// nomeUsuario: string-required-60 caracteres;
// urlImagen:  string-required- 300 caracteres;

// nomeTrilha: PropTypes.string,
// cidade: PropTypes.string,
// estado: PropTypes.string,
// duracao: PropTypes.number,
// trajeto: PropTypes.number,
// dificuldade: PropTypes.string,
// tipo: PropTypes.string,
// nomeUsuario: PropTypes.string,
// urlImagen: PropTypes.string