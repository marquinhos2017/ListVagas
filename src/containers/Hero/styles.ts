import styled from 'styled-components'

export const Hero_container = styled.div`
    background-color:#D9D9D9;
    width:100%;
    height:300px;
    text-align: center;
    align-itens: center;
    max-width: 100%; /* Define a largura máxima do container */
            margin: 0 auto; /* Centraliza o container na página */
            overflow: hidden;

    img{
        width: auto; /* Garante que a imagem ocupe 100% da largura do container */
        height: 100%; /* Mantém a proporção original da imagem */
        display: block;

    }
    position: relative;
            text-align: center;
`

export const TextHero = styled.div`
    position: absolute;
    top: 50%;
    left:35%;
    text-align: left;
    transform: translate(-50%, -50%);
    color: white; /* Cor do texto */
    font-size: 48px; /* Tamanho da fonte */
    font-family: Arial, sans-serif; /* Fonte utilizada */


    @media (max-width: 768px){
        left:50%;
        text-align: left;
    }
`
