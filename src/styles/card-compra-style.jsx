import styled from "styled-components";

export const CardCompraContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 36%;
    background-color: #6272a4;
    border-radius: 10px;
    padding: 10px;
    gap: 10px;

    input {
        padding: 5px;
        border-radius: 4px;
        border: none;
    }
    input:focus {
        outline: none;
        border: none;
    }

    .nome p {
        font-size: 24px;
        color: #f1fa8c;
    }

    p {
        color: #50fa7b;
    }

    .main {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        gap: 10px;
    }
    .imagem {
        background-color: #f8f8f2;
        width: 80%;
        border-radius: 10px;
    }
    .img {
        width: 100%;
    }

    .descricao {
        display: flex;
        flex-direction: column;
    }
    .descricao-text {
        display: flex;
        justify-content: center;
        font-size: 24px;
    }
    .descricao-area {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        font-size: 20px;
    }

    @media (max-width: 700px) {
        && {
            width: 90%;
        }
    }
`