import styled from 'styled-components'
import { Props } from '.'

export const Titulo = styled.h3<Props>`
    color: black;
    font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
    font-weight: bold;

    padding: ${(props) => (props.padding ? props.padding + 'px' : '0px')};
`
