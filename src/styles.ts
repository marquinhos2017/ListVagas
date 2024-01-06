import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        font-family: 'Inter', sans-serif;
        list-style:none;
    }

    body{
        padding-top:0px;
        padding-bottom:80px;

        @media (max-width: 768px){
            padding-top:16px;
        }
    }

    input{
        padding:12px;
        font-size: 12px;
    }






`

export default EstiloGlobal

export const Container = styled.div`
    max-width: 1024px;
    width:100%;
    margin: 0 auto;


    @media (max-width: 768px){
        max-width:80%;
        display:block;

        img{
            width: 100%;


        }

        label{
            display:none;
        }
    }


    '
`
