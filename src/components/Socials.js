import React from 'react';
import { VStack, Link, Icon } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

function Socials() {
    return (
        <VStack align="start" spacing={3}>
            <Link href="https://facebook.com" isExternal>
                <Icon as={FaFacebook} w={6} h={6} />
                Facebook
            </Link>
            <Link href="https://twitter.com" isExternal>
                <Icon as={FaTwitter} w={6} h={6} />
                Twitter
            </Link>
            <Link href="https://instagram.com" isExternal>
                <Icon as={FaInstagram} w={6} h={6} />
                Instagram
            </Link>
            <Link href="https://linkedin.com" isExternal>
                <Icon as={FaLinkedin} w={6} h={6} />
                LinkedIn
            </Link>
            <Link href="https://youtube.com" isExternal>
                <Icon as={FaYoutube} w={6} h={6} />
                Youtube
            </Link>
        </VStack>
    );
}

export default Socials;
