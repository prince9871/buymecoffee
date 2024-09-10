import { Flex, Heading, IconButton, Badge, Button, Link as ChakraLink} from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { GiCoffeeCup } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import { Link as ReactRouterLink } from 'react-router-dom'


export default function Navbar () {
  const cartItemCount = useSelector((state) => state.counter.value);
  const handleClick = () => {
    window.location.href = '/#';
  };
  const handleCartClick = () => {
    window.location.href = '/#/cart';
  };

  return (
    <Flex as="nav" p={4} bg="teal.500" color="white" justify="space-between" align="center">
      <Flex align="center">
        <GiCoffeeCup size="34px" style={{ marginRight: '8px' }} />
       <Heading size="lg" onClick={handleClick}>Buy Me Coffee</Heading>
      </Flex>
      <Flex align="center">
      <Flex position="relative">
        <IconButton
          onClick={handleCartClick}
          icon={<FaShoppingCart />}
          aria-label="Shopping Cart"
          variant="solid"
          colorScheme="whiteAlpha"
          fontSize="lg"
          isRound
          zIndex="1"
        />
        {cartItemCount >= 0 && (
          <Badge
            colorScheme="red"
            borderRadius="full"
            px={2}
            py={1}
            fontSize="0.8em"
            position="absolute"
            top="-5px"
            right="-5px"
            zIndex="2"
          >
            {cartItemCount}
          </Badge>
        )}
      </Flex>
    </Flex>
    </Flex>
  );
};


