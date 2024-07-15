import React from 'react';
import { Box, Heading, HStack, VStack, Image, Text } from '@chakra-ui/react';

function ScrollCard({ imageSrc, name }) {
    return (
        <VStack>
            <Image src={imageSrc} alt={name} borderRadius="md" minWidth={500} objectFit="cover" />
            <Text>{name}</Text>
        </VStack>
    );
}

export default ScrollCard;