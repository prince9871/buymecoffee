import { Flex, Heading, IconButton, Badge } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import { GiCoffeeCup } from 'react-icons/gi';
import { useSelector } from 'react-redux';


export default function Navbar () {
  const cartItemCount = useSelector((state) => state.counter.value);

  return (
    <Flex as="nav" p={4} bg="teal.500" color="white" justify="space-between" align="center">
      <Flex align="center">
        <GiCoffeeCup size="34px" style={{ marginRight: '8px' }} />
        <Heading size="lg">Buy Me Coffee</Heading>
      </Flex>
      <Flex align="center">
      <Flex position="relative">
        <IconButton
          
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


