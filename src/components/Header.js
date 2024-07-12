import React from 'react';
import { HStack, Link, Icon, Box, Flex, Spacer} from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { HiMenuAlt4 } from 'react-icons/hi';
import { IoPersonCircle } from 'react-icons/io5';
import theme from '../Themes';

function Header() {
    return (
        <Flex as="header" className="header" bg={theme.colors.customBlack} color="white" p={20} align="center">
            <Box className="left-heading-buttons">
                    <Link href="https://facebook.com" isExternal>
                        <Icon as={HiMenuAlt4} w={50} h={50} />
                    </Link>
            </Box>
            <Box flex="1" textAlign="center" fontSize="30px" fontWeight="bold">
                Majestik
            </Box>
            <Box className="right-heading-button">
                <Link href="#profile" isExternal>
                        <Icon as={IoPersonCircle} w={50} h={50} />
                </Link>
            </Box>
        </Flex>
    );
}//<Link href="#cart" isExternal><Icon as={FaShoppingCart} w={50} h={50} /></Link>

export default Header;
