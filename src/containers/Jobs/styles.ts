import styled from 'styled-components'

export const Lista = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 12px;
    row-gap: 20px;
    background-color: white;
    margin-top:20px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        column-gap: 0;
        row-gap: 16px;
    }
`
