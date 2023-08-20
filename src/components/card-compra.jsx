import { useParams } from "react-router-dom"
import { CardCompraContainer } from "../styles/card-compra-style"

import tomateVermelho from "../assets/maçaVermelha.png"
import tomateVerde from "../assets/maçaVerde.png"
import { useState } from "react"

export const CardCompra = () => {

    const { cor } = useParams()

    const maca = [
        {
            nome: "Maça Verde",
            des: "a vermelha é melhor"
        },
        {
            nome: "Maça Vermelha",
            des: "maça da boa"
        }
    ]

    const macaVerde = tomateVerde;
    const macaVermelha = tomateVermelho;
    const imagem = cor === 'verde' ? macaVerde : macaVermelha;
    const macaCor = cor === 'verde' ? `${maca[0].nome}` : `${maca[1].nome}`;
    const macaDes = cor === 'verde' ? `${maca[0].des}` : `${maca[1].des}`;

    const [mainDisplay, setMaisDisplay] = useState('flex');

    const hideMain = () => {
        setMaisDisplay('none');
    }

    return (
        <div className="CardCompra">
            <CardCompraContainer style={{ display: mainDisplay}} >
                <div className="nome" >
                    <p>{macaCor}</p>
                </div>
                <div className="main">
                    <div className="imagem">
                        <img className="img" src={imagem} alt="" />
                    </div>
                    <div className="descricao">
                        <p className="descricao-text">Descrição</p>
                        <p className="descricao-area">{macaDes}</p>
                    </div>
                    <div className="quantidade">
                        <p className="quantidade-text">Quantidade</p>
                        <input className="quantidade-input" type="text" />
                    </div>
                    <button onClick={hideMain} className="comprar">Comprar</button>
                </div>
            </CardCompraContainer>
        </div>
    )
}