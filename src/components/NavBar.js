import React from 'react';
import { Box, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import theme from '../Themes';

function NavBar() {

    const linkStyles = {
        _hover: {
            color: theme.colors.customSilver,
            textDecoration: 'underline',
        },
        _active: {
            color: theme.colors.customPink,
        },
    };

    return (
        <Flex as="nav"
         justifyContent={'space-between'}
         minWidth="100%"
         px={500}
         py={10}
         top={50}
         position="fixed"
         bg={theme.colors.customPurple}
         color="white">
            <Box mx={4}>
                <Link as={RouterLink} to="/shop-all" {...linkStyles}>
                    SHOP ALL
                </Link>
            </Box>
            <Box mx={4}>
                <Link as={RouterLink} to="/sale" {...linkStyles}>
                    FOR SALE
                </Link>
            </Box>
            <Box mx={4}>
                <Link as={RouterLink} to="/brands" {...linkStyles}>
                    BRANDS
                </Link>
            </Box>
            <Box mx={4}>
                <Link as={RouterLink} to="/suits" {...linkStyles}>
                    SUITS
                </Link>
            </Box>
            <Box mx={4}>
                <Link as={RouterLink} to="/shirts" {...linkStyles}>
                    SHIRTS
                </Link>
            </Box>
            <Box mx={4}>
                <Link as={RouterLink} to="/shoes" {...linkStyles}>
                    SHOES
                </Link>
            </Box>
        </Flex>
    );
}

export default NavBar;
