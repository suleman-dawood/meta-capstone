import React from 'react';
import { Box, Grid, GridItem, VStack, Heading, Image } from '@chakra-ui/react';
import heroSuit1 from "../images/hero_suit1.jpg";
import heroSuit2 from "../images/hero_suit2.jpg";
import theme from '../Themes';
import CustomButton from './CustomButton';

function Hero() {
    return (
        <Box py={30} px={60}>
            <Grid templateColumns="1fr 1fr 1fr" gap={0} alignItems="center">
                <GridItem align="center">
                    <Image src={heroSuit1} alt="Left Image" width="400px" height="600px" borderRadius="20px" objectFit='cover' boxShadow="10px 20px 9px #D4CAF9"/>
                </GridItem>
                <GridItem>
                    <VStack align="center" spacing={0}>
                        <Heading fontSize="80px" fontWeight="bold" color={theme.colors.customPurple}>
                            Majestik
                        </Heading>
                        <Heading fontSize="40px" mb="30px" color={theme.colors.customBlack}>
                            OHIO
                        </Heading>
                        <Heading mb={50} color={theme.colors.customBlack}>
                            Discover the essence of timeless elegance at our suit shop in Ohio, founded by
                            six brothers. Each garment at our establishment embodies skilled craftsmanship
                            and a rich heritage of tailoring excellence. From classic cuts to modern styles,
                            we cater to those who value quality craftsmanship.
                        </Heading>
                        <CustomButton text="Sign Up Now" />
                    </VStack>
                </GridItem>
                <GridItem align="center">
                    <Image src={heroSuit2} alt="Right Image" width="400px" height="600px" borderRadius="20px" objectFit='cover' boxShadow="10px 20px 9px #D4CAF9"/>
                </GridItem>
            </Grid>
        </Box>
    );
}

export default Hero;
