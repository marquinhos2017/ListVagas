import styled from 'styled-components'
import { Props } from '../Paragrafo'

export const P = styled.p<Props>`
    font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
    color: ${(props) => (props.tipo === 'principal' ? 'black' : 'gray')};
    line-height: 22px;
`
