import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #6272a4;
    flex-direction: column;
    padding: 15px;
    gap: 10px;
    width: 26%;
    max-width: 270px;
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
        flex-wrap: wrap;
    }

    .card-section{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
    }
    .imagem {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f8f8f2;
        border-radius: 10px;
        width: 100%;
        object-fit: contain;
    }
    img {
        object-fit: contain;
        width: 100%;
        height: 200px;
        background-color: transparent;
    }
    p {
        color: #f1fa8c;
        font-size: 24px;
        white-space: nowrap;
    }
    .card-estoque p {
        color: #50fa7b;
        font-size: 17px;
    }

    @media (max-width: 700px) {
        && {
            width: 60%;
            height: 100%;
        }
        p {
            font-size: 24px;
        }
        .card-estoque p {
            font-size: 20px;
            margin-bottom: 10px;
        }
        .comprar {
            font-size: 18px;
            padding: 12px 15px;
        }
    }
`;