import React from 'react';
import { Box, Heading, HStack, VStack, Image, Text } from '@chakra-ui/react';
import ScrollCard from "./ScrollCard";

function Scroller({ header, portraits }) {
    return (
        <Box py={8} px={4}>
            <Heading mb={4} textAlign="center">{header}</Heading>
            <Box overflowX="scroll">
                <HStack spacing={20}>
                    {portraits.map((portrait, index) => (
                        <ScrollCard key={index} imageSrc={portrait.src} name={portrait.name} />
                    ))}
                </HStack>
            </Box>
        </Box>
    );
}


export default Scroller;