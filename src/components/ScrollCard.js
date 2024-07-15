import React from 'react';
import { Box, Heading, HStack, VStack, Image, Text } from '@chakra-ui/react';
import theme from '../Themes';

function ScrollCard({ imageSrc, name }) {
    return (
        <VStack bg={theme.colors.customSilver}>
            <Image src={imageSrc} alt={name} borderRadius="md" minWidth={350} objectFit="cover" borderBottom="2px solid black"/>
            <Text >{name}</Text>
        </VStack>
    );
}

export default ScrollCard;