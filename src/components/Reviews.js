import React from 'react';
import { Box, Heading, HStack } from '@chakra-ui/react';
import Review from "./Review";
import theme from "../Themes";

function Reviews({ header, reviews }) {
    return (
        <Box py={20} px={100} bg="white">
            <Heading mb={4} textAlign="center" fontSize={40}>{header}</Heading>
            <Box overflowX="auto">
                <HStack spacing={10}>
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
