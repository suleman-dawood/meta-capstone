import { Container } from "@chakra-ui/react";


function Main() {
    return (
        <Container className="main" height="1200px">
            <Hero />
            <Scroller />
            <Sale />
            <Category />
            <Reviews />
            <About />
        </Container>
    )
}

export default Main;