import React from 'react';
import { Center, Container, Text, VStack } from '@chakra-ui/react';
import theme from '../Themes';

function About() {
    return (
        <Container maxW="container.xl" py={10} px={300} color="white" bg={theme.colors.customPurple}>
            <VStack alignContent="start" spacing={40}  marginY={40}>
                <Text fontSize="40px" fontWeight="bold" align="center">About Majestik</Text>
                <Text fontSize="20px">
                    From our humble beginnings in 1948, we have continued to evolve the Majestik brand around our
                    core mission; to help men get suited! Men who are time poor, men who don't want to go shopping
                    for hours on end, men who stick to a budget men who find the entire experience of finding a
                    good suit, a bit tiresome. We exist to help men like you. No frills, no fuss.
                </Text>
                <Text fontSize="20px">
                    At Majestik, we have built a brand around simplicity, honesty and convenience, without
                    compromising style or service. We make finding a suit as simple as it should be.
                </Text>
                <Text fontSize="18px">
                    Our people are our pride, and our greatest asset. The knowledgeable and friendly team of experts
                    know their suits, so that you don't have to!
                </Text>
                <Text fontSize="18px">
                    We have redesigned our stores to help simplify the suit search. We guarantee that there will be
                    no feelings of overwhelm of intimidation. The personal service and relaxed atmosphere in store
                    will put you at ease.
                </Text>
                <Text fontSize="18px">
                    We hope to see you soon!
                </Text>
                <Text fontSize="18px">
                    MAJESTIK. Suit Up
                </Text>
            </VStack>
        </Container>
    );
};
export default About;