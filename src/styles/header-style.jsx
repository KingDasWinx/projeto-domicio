import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 14px 16px;


    ion-icon {
        font-size: 35px;
        background-color: #6272a4;
        padding: 5px;
        border-radius: 10px;
    }
    .imagem {
        width: 15%;
    }


    @media (max-width: 400px) {
        .imagem {
            width: 50%;
        }
    }
`