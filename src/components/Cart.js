import React from 'react';
import { HStack, Link, Icon, Circle } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';

function Cart() {
    return (
        <Circle
                size="80px"
                bg="white"
                color="black"
                boxShadow="xl"  // Adjusted to a thicker shadow
                border="3px solid black"  // Added outline
                position="fixed"
                bottom="40px"
                right="40px"
                zIndex={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Link href="#cart" isExternal>
                    <Icon as={FaShoppingCart} w={50} h={50}/>
                </Link>
            </Circle>
    )
}

export default Cart;