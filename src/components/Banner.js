import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import ReactPlayer from 'react-player';

function Banner() {
    return (
        <Box textAlign="center" paddingTop={130}>
            <Grid templateColumns="1fr 2fr 1fr" gap={0} alignItems="center">
                <GridItem>
                    <Box bg="black" color="white" height="700px" display="flex" alignItems="center" justifyContent="center">
                        <Text fontSize="80px" fontWeight="bold">Style</Text>
                    </Box>
                </GridItem>
                <GridItem>
                    <ReactPlayer
                        url="https://youtu.be/apCwqqM-834" // Replace with the actual URL of your video
                        playing
                        loop
                        muted
                        width="100%"
                        height="700px"
                        style={{ borderRadius: '0.375rem', pointerEvents: 'none' }}
                        controls={false}
                    />
                </GridItem>
                <GridItem>
                    <Box bg="black" color="white" height="700px" display="flex" alignItems="center" justifyContent="center">
                        <Text fontSize="80px" fontWeight="bold">Class</Text>
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    );
}

export default Banner;
