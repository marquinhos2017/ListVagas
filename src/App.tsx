import Jobs from './containers/Jobs'
import Header from './containers/Header/';
import Hero from './containers/Hero'
import EstiloGlobal, { Container } from './styles'
import React from 'react';
import Form from './containers/Form';


function App() {
    return (
        <>
            <EstiloGlobal />
            <Container>
                <Header />
                <Hero />
                <Form/>
                <Jobs />
            </Container>
        </>
    )
}

export default App
