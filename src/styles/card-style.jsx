import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #6272a4;
    flex-direction: column;
    padding: 15px;
    gap: 10px;
    height: 315px;
    border-radius: 10px;

    button {
        border: none;
    }
    .comprar {
        text-align: center;
        padding: 10px;
        border-radius: 10px;
        background-color: #bd93f9;
        cursor: pointer;
    }

    .card-estoque {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-top: 12px;
        width: 100%;
    }

    .card-section{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .imagem {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        height: 200px;
        background-color: #f8f8f2;
        border-radius: 10px;
    }
    img {
        object-fit: contain;
        width: 200px;
    }
    p {
        color: #f1fa8c;
        font-size: 24px;
    }
    .card-estoque p {
        color: #50fa7b;
        font-size: 17px;
    }
`;