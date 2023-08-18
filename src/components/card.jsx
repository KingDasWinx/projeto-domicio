import { CardContainer } from "../styles/card-style"

import tomateVermelho from "../assets/tomateVermelho.png"
import tomateVerde from "../assets/tomateVerde.png"
import { useState } from "react"



export const Card = () => {

    const [stock, setStock] = useState({
        verde: 500,
        vermelho: 500,
    })

    const handleBuyTomato = (type) => {
        if (stock[type] > 0) {
            setStock((prevStock) => ({
                ...prevStock,
                [type]: prevStock[type] - 1,
            }));
        }
    };

    return (
        <div className="CardContainer-pai">
            <CardContainer>
                <div className="card-nome" >
                    <p>Tomate Vermelho</p>
                </div>
                <div className="card-section">
                    <div className="imagem">
                        <img src={tomateVermelho} alt="" />
                    </div>
                    <div className="card-estoque">
                        <p className="estoque-text">Estoque: {stock.vermelho}</p>
                        <button className="comprar" onClick={() => handleBuyTomato('vermelho')}>COMPRAR</button>
                    </div>
                </div>
            </CardContainer>
            <CardContainer>
                <div className="card-nome" >
                    <p>Tomate Verde</p>
                </div>
                <div className="card-section">
                    <div className="imagem">
                        <img src={tomateVerde} alt="" />
                    </div>
                    <div className="card-estoque">
                        <p className="estoque-text">Estoque: {stock.verde}</p>
                        <button className="comprar" onClick={() => handleBuyTomato('verde')}>COMPRAR</button>
                    </div>
                </div>
            </CardContainer>
        </div>
    )
}