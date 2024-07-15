import React from 'react';
import { Link, Flex, Box, Icon, Input, HStack, Button } from '@chakra-ui/react';
import { HiMenu } from 'react-icons/hi';
import { IoPersonCircle } from 'react-icons/io5';
import { FaShoppingCart, FaSearch, FaHeart } from 'react-icons/fa';
import { Link as ReactRouterLink } from 'react-router-dom';
import theme from '../Themes';

function Header() {
    return (
        <Flex
            as="header"
            className="header"
            bg={theme.colors.customBlack}
            color="white"
            py={5}
            px={30}
            align="center"
            position="fixed"
            top={0}
            left={0}
            right={0}
            zIndex={999}
        >
            <Box>
                <HStack spacing={20} align="center">
                    <Link as={ReactRouterLink} to="/menu">
                        <Icon as={HiMenu} w={50} h={50} />
                    </Link>
                    <Link as={ReactRouterLink} to="/profile" >
                        <Icon as={IoPersonCircle} w={50} h={50} />
                    </Link>
                    <Link as={ReactRouterLink} to="/wishlist" >
                        <Icon as={FaHeart} w={45} h={45} />
                    </Link>
                </HStack>
            </Box>
            <Box flex="1" textAlign="center" fontSize="30px" fontWeight="bold">
                <Link as={ReactRouterLink} to="/" textDecoration="none" color="white">
                    Majestik
                </Link>
            </Box>
            <Box>
                <HStack>
                    <Button
                        bg="transparent"
                        color="white"
                        borderRadius="10"
                        px={0}
                        py={2}
                        _hover={{ bg: theme.colors.customSilver }}
                        leftIcon={<FaSearch />}
                    >
                        <Input
                            type="text"
                            placeholder="Search our Store"
                            size="lg"
                            bg="white"
                            color="black"
                            borderRadius="10"
                            px={10}
                            py={2}
                            width={300}
                            height={40}
                            fontSize={18}
                        />
                    </Button>
                </HStack>
            </Box>
        </Flex>
    );
}

export default Header;
