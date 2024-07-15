import React from 'react';
import { ChakraProvider, HStack, Box } from '@chakra-ui/react';
import Socials from './Socials';
import ContactDetails from './ContactDetails';
import theme from '../Themes';

function Footer() {
    return (
        <ChakraProvider>
            <Box className="footer" p={4} bg={theme.colors.customBlack}>
                <HStack spacing={8} justify="space-between" align="flex-start" color="white">
                    <Socials />
                    <ContactDetails />
                </HStack>
            </Box>
        </ChakraProvider>
    )
}

export default Footer;