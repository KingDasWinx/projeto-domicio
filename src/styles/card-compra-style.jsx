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
        gap: 10px;
    }
    .imagem {
        background-color: #f8f8f2;
        width: 50%;
        border-radius: 10px;
    }
    .img {
        width: 100%;
    }
    @media (max-width: 700px) {
        && {
            width: 90%;
        }
    }
`