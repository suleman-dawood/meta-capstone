import React from 'react';
import { Box, Heading, HStack } from '@chakra-ui/react';
import Review from "./Review";

function Reviews({ header, reviews }) {
    return (
        <Box py={8} px={4}>
            <Heading mb={4} textAlign="center">{header}</Heading>
            <Box overflowX="auto">
                <HStack spacing={6}>
                    {reviews.map((review, index) => (
                        <Review
                            key={index}
                            name={review.name}
                            location={review.location}
                            rating={review.rating}
                            title={review.title}
                            description={review.description}
                            recommends={review.recommends}
                        />
                    ))}
                </HStack>
            </Box>
        </Box>
    );
}

export default Reviews;
