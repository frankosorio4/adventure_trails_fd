import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField'
import { Select, MenuItem } from '@mui/material'
import Button from '@mui/material/Button'
import style from "./cadastro.module.css"
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material/styles'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'
import { TrilhasContext } from '../context/TrilhasContext'

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

    const { addTrail } = useContext(TrilhasContext);

    function onSubmit(formValues) {
        console.log(formValues);
        addTrail(
            {
                ...formValues,
                //debido a que el formulario lo guarda como string
                duracao: Number(formValues.duracao),
                trajeto: Number(formValues.trajeto)
            }
        )
        navigate("/listatrilhas");
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
                                        value: 5,
                                        message: "Mínimo 5 caracteres."
                                    },
                                    maxLength: {
                                        value: 100,
                                        message: "Máximo de 100 caracteres"
                                    }
                                }
                            )
                            }
                        />
                        {errors.nomeTrilha && <p className={style.pError}>{errors.nomeTrilha.message}</p>}
                    </div>

                    <div className={style.divTextField2}>
                        <div>
                            <div>Cidade</div>
                            <TextField
                                id="cidade-trilha"
                                sx={{ mt: 1, width: '18em' }}
                                variant="outlined"
                                {...register("cidade",
                                    {
                                        required: "Campo Obrigatorio",
                                        minLength: {
                                            value: 3,
                                            message: "Mínimo 3 caracteres"
                                        },
                                        maxLength: {
                                            value: 60,
                                            message: "Máximo de 60 caracteres"
                                        }
                                    }
                                )
                                }
                            />
                            {errors.cidade && <p className={style.pError}>{errors.cidade.message}</p>}
                        </div>

                        <div>
                            <div>Estado</div>
                            <TextField
                                id="estado-trilha"
                                sx={{ mt: 1, width: '18em' }}
                                variant="outlined"
                                {...register("estado",
                                    {
                                        required: "Campo Obrigatorio",
                                        minLength: {
                                            value: 1,
                                            message: "Mínimo 2 caracteres"
                                        },
                                        maxLength: {
                                            value: 2,
                                            message: "Máximo de 2 caracteres"
                                        }
                                    }
                                )
                                }
                            />
                            {errors.estado && <p className={style.pError}>{errors.estado.message}</p>}
                        </div>
                    </div>

                    <div className={style.divTextField2}>
                        <div>
                            <div>Duraçao estimada (min)</div>
                            <TextField
                                id="duracao-trilha"
                                type="number"
                                sx={{ mt: 1, width: '18em' }}
                                variant="outlined"
                                {...register("duracao",
                                    {
                                        required: "Campo Obrigatorio",
                                        minLength: {
                                            value: 2,
                                            message: "Mínimo 2 caracteres"
                                        },
                                        maxLength: {
                                            value: 4,
                                            message: "Máximo de 4 caracteres"
                                        }
                                    }
                                )
                                }
                            />
                            {errors.duracao && <p className={style.pError}>{errors.duracao.message}</p>}
                        </div>

                        <div>
                            <div>Trajeto (Km)</div>
                            <TextField
                                id="Trajeto-trilha"
                                type="number"
                                placeholder='Numero decimal com ponto'
                                inputProps={{ step: 0.1 }}
                                // inputProps={{ step: 'any' }}
                                sx={{ mt: 1, width: '18em' }}
                                variant="outlined"
                                {...register("trajeto",
                                    {
                                        required: "Campo Obrigatorio",
                                        minLength: {
                                            value: 1,
                                            message: "Mínimo 1 caracteres"
                                        },
                                        maxLength: {
                                            value: 4,
                                            message: "Máximo de 4 caracteres"
                                        }
                                    }
                                )
                                }
                            />
                            {errors.trajeto && <p className={style.pError}>{errors.trajeto.message}</p>}
                        </div>
                    </div>

                    <div className={style.divTextField2}>
                        <div>
                            <div>Dificudade</div>
                            <Select
                                defaultValue=""
                                sx={{ mt: 1, width: '18em' }}
                                {...register('dificuldade',
                                    { required: "Campo Obrigatorio" }
                                )}
                            >
                                <MenuItem value="Iniciante">Iniciante</MenuItem>
                                <MenuItem value="Intermediário">Intermediário</MenuItem>
                                <MenuItem value="Difícil">Difícil</MenuItem>
                            </Select>
                            {errors.dificuldade && <p className={style.pError}>{errors.dificuldade.message}</p>}
                        </div>
                        <div>
                            <div>Tipo de Trilha</div>
                            <Select
                                defaultValue=""
                                sx={{ mt: 1, width: '18em' }}
                                {...register('tipo',
                                    // { required: true }
                                    { required: "Campo Obrigatorio" }
                                )}
                            >
                                <MenuItem value="Caminhada">Caminhada</MenuItem>
                                <MenuItem value="Trekking">Trekking</MenuItem>
                                <MenuItem value="Bicicleta">Bicicleta</MenuItem>
                            </Select>
                            {errors.tipo && <p className={style.pError}>{errors.tipo.message}</p>}
                        </div>
                    </div>

                    <div className={style.divTextField1}>
                        <div>Nome completo usuário</div>
                        <TextField
                            id="nome-usuario"
                            sx={{ mt: 1 }}
                            variant="outlined"
                            {...register("nomeUsuario",
                                {
                                    required: "Campo Obrigatorio",
                                    minLength: {
                                        value: 5,
                                        message: "Mínimo 5 caracteres"
                                    },
                                    maxLength: {
                                        value: 60,
                                        message: "Máximo de 60 caracteres"
                                    }
                                }
                            )
                            }
                        />
                        {errors.nomeUsuario && <p className={style.pError}>{errors.nomeUsuario.message}</p>}
                    </div>

                    <div className={style.divTextField1}>
                        <div>Url imagen da trilha</div>
                        <TextField
                            id="url-imagen-trilha"
                            sx={{ mt: 1 }}
                            variant="outlined"
                            {...register("urlImagen",
                                {
                                    required: "Campo Obrigatorio",
                                    minLength: {
                                        value: 10,
                                        message: "Mínimo 10 caracteres"
                                    },
                                    maxLength: {
                                        value: 300,
                                        message: "Máximo de 300 caracteres"
                                    }
                                }
                            )
                            }
                        />
                        {errors.urlImagen && <p className={style.pError}>{errors.urlImagen.message}</p>}
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
                            onClick={() => navigate("/",
                                window.scrollTo({ top: 0 })
                            )
                            }
                        >Voltar
                        </Button>
                    </div>
                </form>
            </ThemeProvider>
        </div >
    )
}

export default Cadastro;

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
