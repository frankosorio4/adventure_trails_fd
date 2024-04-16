import * as PropTypes from "prop-types"
import "./style.css"

function CardTrilha({dadosTrilha}){
    return(
        <div className="card_container"> 
            <img className="card_imagen" src={dadosTrilha.urlImagen} alt="Imagen Trilha" />
            <div className="div0DadosTrilha">
                <div className="div1DadosTrilha">
                    <h2 className="nomeTrilha">{dadosTrilha.nomeTrilha}</h2>
                    <span className="spanDificuldade">{dadosTrilha.dificuldade}</span>
                </div>
                <div className="div2DadosTrilha">
                    <span>{dadosTrilha.cidade} / {dadosTrilha.estado}</span>
                    <span>Tipo: {dadosTrilha.tipo}</span>
                    <span>Trajeto: {dadosTrilha.trajeto} Km</span>
                    <span>Duraçao: {dadosTrilha.duracao} min</span>
                </div>
            </div>
        </div>
    )
}

CardTrilha.propTypes = {
    dadosTrilha: PropTypes.exact({
        nomeTrilha: PropTypes.string,
        cidade: PropTypes.string,
        estado: PropTypes.string,
        duracao: PropTypes.number,
        trajeto: PropTypes.number,
        dificuldade: PropTypes.string,
        tipo: PropTypes.string,
        nomeUsuario: PropTypes.string,
        urlImagen: PropTypes.string
    })
}

export default CardTrilha;