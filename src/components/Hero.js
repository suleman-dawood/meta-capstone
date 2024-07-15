import React from 'react';
import { Box, HStack, VStack, Heading, Text, Image } from '@chakra-ui/react';
import heroSuit from "../images/hero_suit.jpg";
import theme from '../Themes';
import CustomButton from './CustomButton';

function Hero() {
    return (
        <Box py={60} px={80} display="flex" alignItems="center">
            <Box flex="1" pr={8}>
                <Image src={heroSuit} alt="Hero Image" borderRadius="md" height={700}/>
            </Box>
            <Box flex="1">
                <VStack align="flex-start" spacing={4}>
                    <HStack spacing={4} align="baseline">
                        <Heading size="xl" fontSize="4xl" fontWeight="bold" color={theme.colors.customSilver}>
                            Majestik
                        </Heading>
                        <Heading size="lg" color={theme.colors.customGold}>
                            OHIO
                        </Heading>
                    </HStack>
                    <Text fontSize="lg" lineHeight="taller" color={theme.colors.customDark}>
                        Discover the essence of timeless elegance at our suit shop in Ohio, founded by
                        six brothers. Each garment at our establishment embodies skilled craftsmanship
                        and a rich heritage of tailoring excellence. From classic cuts to modern styles,
                        we cater to those who value quality craftsmanship.
                    </Text>
                    <CustomButton text="Sign Up Now" onClick={() => console.log("Signing up...")} />
                </VStack>
            </Box>
        </Box>
    );
}

export default Hero;
