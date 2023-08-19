import { CardContainer } from "../styles/card-style"

import tomateVermelho from "../assets/maçaVermelha.png"
import tomateVerde from "../assets/maçaVerde.png"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { get, set } from "local-storage"


export const Card = () => {

    const [macaVerde, setMacaVerde] = useState(get('macaVerde') || 0);
    const [macaVermelha, setMacaVermelha] = useState(get('macaVermelha') || 0);

    

    useEffect(() => {
        if (macaVerde === 0) {
            set('macaVerde', 500);
        }
        if (macaVermelha === 0) {
            set('macaVermelha', 500);
        }
    }, []);

    return (
        <div className="CardContainer-pai">
            <CardContainer>
                <div className="card-nome" >
                    <p>Maça Vermelha</p>
                </div>
                <div className="card-section">
                    <div className="imagem">
                        <img src={tomateVermelho} alt="" />
                    </div>
                    <div className="card-estoque">
                        <p className="estoque-text">Estoque: {macaVermelha}</p>
                        <Link to="/compra/vermelha">
                            <button className="comprar">COMPRAR</button>
                        </Link>
                    </div>
                </div>
            </CardContainer>
            <CardContainer>
                <div className="card-nome" >
                    <p>Maça Verde</p>
                </div>
                <div className="card-section">
                    <div className="imagem">
                        <img src={tomateVerde} alt="" />
                    </div>
                    <div className="card-estoque">
                        <p className="estoque-text">Estoque: {macaVerde}</p>
                        <Link to="/compra/verde">
                            <button className="comprar">COMPRAR</button>
                        </Link>
                    </div>
                </div>
            </CardContainer>
        </div>
    )
}