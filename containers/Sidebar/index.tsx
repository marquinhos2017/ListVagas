import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { Descricao, BotaoTema, SidebarContainer } from './styles'
import React from 'react';

const Sidebar = () => (
    <aside>
        <SidebarContainer>
            <Avatar />
            <Titulo fontSize={20}>Marquinhos</Titulo>
            <Paragrafo tipo="secundario" fontSize={16}>
                marquinhos2017
            </Paragrafo>
            <Descricao tipo="principal" fontSize={12}>
                Engenheiro front-end
            </Descricao>
            <BotaoTema>Trocar tema</BotaoTema>
        </SidebarContainer>
    </aside>
)

export default Sidebar
