import React from 'react';
import { HStack, Link, Icon} from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { HiMenuAlt4 } from 'react-icons/hi';
import { IoPersonCircle } from 'react-icons/io5';

function Header() {
    return (
        <header className="header">
            <div className="left-heading-uttons">
                <HStack spacing={4}>
                    <Link href="https://facebook.com" isExternal>
                        <Icon as={HiMenuAlt4} w={6} h={6} />
                        Menu
                    </Link>
                    <Link href="#profile" isExternal>
                        <Icon as={IoPersonCircle} w={6} h={6} />
                        Profile
                    </Link>
                </HStack>
            </div>
            <div className="center-heading">
                Majestik
            </div>
            <div className="right-heading-button">
                <Link href="#cart" isExternal>
                    <Icon as={FaShoppingCart} w={6} h={6} />
                        Cart
                </Link>
            </div>
        </header>
    )
}

export default Header;