import { Titulo as TituloEstilo } from './styles'
import React from 'react';

export type Props = {
    children: string
    fontSize?: number
    padding?: number
}

const Titulo = (props: Props) => (
    <TituloEstilo fontSize={props.fontSize} padding={props.padding}  >{props.children}</TituloEstilo>
)

export default Titulo
