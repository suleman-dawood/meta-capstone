import React from 'react';
import { Button, useToast } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import theme from '../Themes';

function CustomButton({ text, onClick }) {
    const toast = useToast();

    const handleClick = () => {
        onClick(); // Handle click event, if needed
        toast({
            title: "Signed Up!",
            description: "You have successfully signed up.",
            status: "success",
            duration: 3000,
            isClosable: true,
        });
    };

    return (
        <Button
            bg={theme.colors.customPurple} // Corrected theme path from `color` to `colors`
            color="white"
            padding="8"
            borderRadius="100"
            fontSize="24px"
            width="100%"
            _hover={{ bg: theme.colors.customPink,
             }}
            _active={{ bg: theme.colors.customBlack,
                color: "white"}}
            onClick={handleClick}
        >
            {text}
        </Button>
    );
}

CustomButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default CustomButton;
