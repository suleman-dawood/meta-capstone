import React from 'react';
import { Box, Image, Heading, Text, Flex, VStack, HStack, Spacer } from '@chakra-ui/react';
import theme from '../Themes';
import StarRating from './StarRatiing';

function Review({ name, location, rating, title, description, recommends }) {

    return  (
        <Box borderWidth="5px" borderRadius="5px" overflowY="hidden" p={8} mb={4} minWidth={500} minHeight={300} display="flex" flexDirection="column" justifyContent="space-between">
            <VStack alignItems="flex-start" spacing={0}>
                <HStack alignItems="baseline" spacing={10}>
                    <Heading as="h3" size="sm">{name}</Heading>
                    <Heading as="h3" size="sm" fontSize="18px">{location}</Heading>
                </HStack>
            </VStack>
            <Box mt={2} flexGrow={1}>
                <Text fontSize="28" fontWeight="bold" mb="10" align="start">{title}</Text>
                <Text fontSize="20" mb={2} align="start">{description}</Text>
            </Box>
            {recommends && (
                <Text fontSize="sm" paddingEnd={10} align="end" mt="auto">Recommends this product</Text>
            )}
        </Box>
    );
};
export default Review;
