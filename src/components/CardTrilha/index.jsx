import * as PropTypes from "prop-types"
import "./style.css"

function CardTrilha({dadosTrilha}){
    return(
        <div className="card_container"> 
            <img className="card_imagen" width={200} src={dadosTrilha.urlImagen} alt="imagen trilha" />
            <h1>{dadosTrilha.nomeTrilha}</h1>
            <span>{dadosTrilha.cidade} / {dadosTrilha.estado}</span>
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