import React from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  HStack,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
  Image,
  Input,
  SimpleGrid,
} from '@chakra-ui/react';
import { IoIosCloseCircle as CloseIcon } from 'react-icons/io';

const CartPage = () => {
  // Sample cart items (you would typically fetch this from your state management or API)
  const cartItems = [
    {
      id: 1,
      name: 'Coffee Mug',
      price: 15.99,
      quantity: 1,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Notebook',
      price: 9.99,
      quantity: 2,
      image: 'https://via.placeholder.com/150',
    },
  ];

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <Container maxW={'container.lg'} py={10}>
      <Heading as="h1" size="xl" mb={6} textAlign="center">
        Your Cart
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        {/* Left Section: Cart Items */}
        <Stack spacing={6}>
          {cartItems.map((item) => (
            <Box key={item.id} borderWidth={1} borderRadius="lg" overflow="hidden" p={4}>
              <HStack spacing={4}>
                <Image src={item.image} alt={item.name} boxSize="100px" objectFit="cover" />
                <Stack flex={1}>
                  <Text fontWeight="bold">{item.name}</Text>
                  <Text color={useColorModeValue('gray.600', 'gray.300')}>${item.price.toFixed(2)}</Text>
                  <HStack spacing={4}>
                    <Input
                      type="number"
                      value={item.quantity}
                      min={1}
                      width="60px"
                      textAlign="center"
                      onChange={(e) => console.log('Update quantity for', item.name, e.target.value)}
                    />
                    <IconButton
                      icon={<CloseIcon />}
                      colorScheme="red"
                      variant="outline"
                      aria-label="Remove item"
                      onClick={() => console.log('Remove item', item.name)}
                    />
                  </HStack>
                </Stack>
              </HStack>
            </Box>
          ))}
        </Stack>

        {/* Right Section: Total Amount and Checkout Button */}
        <Box borderWidth={1} borderRadius="lg" p={6} bg={useColorModeValue('gray.50', 'gray.700')}>
          <Heading as="h2" size="lg" mb={4}>
            Order Summary
          </Heading>
          <Divider mb={4} />
          <HStack justifyContent="space-between" mb={4}>
            <Text fontSize="xl" fontWeight="bold">Total:</Text>
            <Text fontSize="xl" fontWeight="bold">${totalPrice}</Text>
          </HStack>
          <Button colorScheme="teal" size="lg" width="full" onClick={() => console.log('Proceed to checkout')}>
            Proceed to Checkout
          </Button>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default CartPage;