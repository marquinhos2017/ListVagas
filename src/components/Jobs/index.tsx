import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, LinkBotao,Salary } from './styles'
import React from 'react';

const Job = () => (
    <Card>
        <Titulo>FULL STACK DESENVOLVEDOR</Titulo>
        <Paragrafo tipo="secundario">
        Desenvolver aplicações web completas, desde a concepção até a implementação.
        Colaborar com as equipes de design e produto para criar interfaces de usuário intuitivas e atraentes.
        </Paragrafo>
        <Salary tipo='principal'>
            $48k - $90k/year
        </Salary>

        <LinkBotao>+</LinkBotao>
    </Card>
)
export default Job
