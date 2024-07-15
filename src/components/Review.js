import React from 'react';
import { Box, Image, Heading, Text, Flex, VStack, HStack, Badge } from '@chakra-ui/react';
import theme from '../Themes';

function Review({ name, location, rating, title, description, recommends }) {

    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} mb={4} boxShadow="md" minWidth={600}>
            <Flex alignItems="center" mb={2}>
                <VStack alignItems="flex-start" spacing={0}>
                    <Heading as="h3" size="sm">{name}</Heading>
                    <Text fontSize="xs" color="gray.500">{location}</Text>
                </VStack>
            </Flex>
            <Box mt={2}>
                <HStack spacing={2} mb={2}>
                    <Badge colorScheme="green">{rating}</Badge>
                    <Text fontSize="sm" fontWeight="bold">{title}</Text>
                </HStack>
                <Text fontSize="sm" mb={2}>{description}</Text>
                {recommends && (
                    <Text fontSize="sm" color="green.500">Recommends this product</Text>
                )}
            </Box>
        </Box>
    );
};
export default Review;
