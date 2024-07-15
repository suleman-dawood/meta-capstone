import React from 'react';
import { Container } from "@chakra-ui/react";
import Hero from "./Hero";
import Scroller from "./Scroller";
import Banner from './Banner';
import NavBar from './NavBar';
import theme from "../Themes";
import loadImages from "../utils/loadImages";
import Reviews from "./Reviews";
import reviewsData from '../data/reviews.json';

function Main() {
    const portraits = loadImages(require.context('../images/portraits', false, /\.(png|jpe?g|svg)$/));
    const reviews = reviewsData;

    return (
        <Container className="main" maxW="container.xl" mx="auto" px={400} height="auto" bg={theme.colors.customWhite} fontSize="20px">
            <Container bg={theme.colors.customSilver} >
                <Banner />
                <NavBar />
                <Hero />
                <Scroller portraits={portraits} header="Spring Sale"/>
                <Reviews header="Our Reviews" reviews={reviews}/>
            </Container>
        </Container>
    )
}

export default Main;
