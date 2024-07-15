import React from 'react';
import { Box, Heading, HStack, VStack, Image, Text } from '@chakra-ui/react';
import ScrollCard from "./ScrollCard";
import theme from '../Themes';

function Scroller({ header, portraits }) {
    return (
        <Box py={8} px={200} bg={theme.colors.customBlack}>
            <Heading mb={10} textAlign="center" fontSize={70} color="white">{header}</Heading>
            <Box overflowX="scroll">
                <HStack spacing={5} mb={0}>
                    {portraits.map((portrait, index) => (
                        <ScrollCard key={index} imageSrc={portrait.src} name={portrait.name} />
                    ))}
                </HStack>
            </Box>
        </Box>
    );
}


export default Scroller;