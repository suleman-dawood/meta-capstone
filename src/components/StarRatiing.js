import { Badge } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';

function StarRating({ rating }) {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={`full-star-${i}`} />);
    }
    if (halfStar) {
        stars.push(<FaStar key="half-star" />);
    }
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<FaStar key={`empty-star-${i}`} style={{ opacity: 0.25 }} />);
    }

    return (
        <Badge colorScheme="green" display="inline-flex" alignItems="center">
            {stars}
        </Badge>
    );
};

export default StarRating;