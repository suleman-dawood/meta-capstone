import bannerImage from "../images/banner.png"; // Import your banner image here
import React from 'react';
import { Box, Image } from '@chakra-ui/react';

function Banner() {
    return (
        <Box mb={8} textAlign="center" paddingTop={68}>
            <Image src={bannerImage} alt="Banner Image" borderRadius="md" width="100%"/>
        </Box>
    );
}

export default Banner;