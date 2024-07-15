import React from 'react';
import { Box, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function NavBar() {
    return (
        <Flex as="nav" justifyContent="center" py={4}>
            <Box mx={4}>
                <Link as={RouterLink} to="/" color="black" textDecoration="none" fontSize="lg" fontWeight="bold" _hover={{ color: 'gray.600' }}>
                    Home
                </Link>
            </Box>
            <Box mx={4}>
                <Link as={RouterLink} to="/shop" color="black" textDecoration="none" fontSize="lg" fontWeight="bold" _hover={{ color: 'gray.600' }}>
                    Shop
                </Link>
            </Box>
            <Box mx={4}>
                <Link as={RouterLink} to="/about" color="black" textDecoration="none" fontSize="lg" fontWeight="bold" _hover={{ color: 'gray.600' }}>
                    About Us
                </Link>
            </Box>
            <Box mx={4}>
                <Link as={RouterLink} to="/contact" color="black" textDecoration="none" fontSize="lg" fontWeight="bold" _hover={{ color: 'gray.600' }}>
                    Contact Us
                </Link>
            </Box>
            <Box mx={4}>
                <Link as={RouterLink} to="/login" color="black" textDecoration="none" fontSize="lg" fontWeight="bold" _hover={{ color: 'gray.600' }}>
                    Login
                </Link>
            </Box>
        </Flex>
    );
}

export default NavBar;
