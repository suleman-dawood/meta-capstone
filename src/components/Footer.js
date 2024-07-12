import React from 'react';
import { ChakraProvider, HStack, Box } from '@chakra-ui/react';
import Socials from './Socials';
import ContactDetails from './ContactDetails';

function Footer() {
    return (
        <ChakraProvider>
            <Box className="footer" p={4} backgroundColor="#f8f9fa">
                <HStack spacing={8} justify="space-between">
                    <Socials />
                    <ContactDetails />
                </HStack>
            </Box>
        </ChakraProvider>
    )
}

export default Footer;