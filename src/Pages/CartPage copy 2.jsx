import React from 'react';
import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Image,
  Button,
  Select,
  Link,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';



const CartItem = ({ name, description, quantity, imageUrl, price, onChangeQuantity, onClickDelete }) => (
  <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center" mb={4}>
    <Flex>
      <Image
        rounded="lg"
        width="120px"
        height="120px"
        fit="cover"
        src={imageUrl}
        alt={name}
        draggable="false"
        loading="lazy"
      />
      <Box ml={4}>
        <Text fontWeight="medium">{name}</Text>
        <Text color={mode('gray.600', 'gray.400')} fontSize="sm">
          {description}
        </Text>
      </Box>
    </Flex>
    <Flex align="center" mt={{ base: 4, md: 0 }}>
      <Select
        maxW="64px"
        value={quantity}
        onChange={(e) => onChangeQuantity(+e.target.value)}
      >
        {[1].map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </Select>
      <Text fontWeight="medium" mx={4}>
      ₹{price.toFixed(2)}
      </Text>
      <Button onClick={onClickDelete} size="sm">
        Delete
      </Button>
    </Flex>
  </Flex>
);

const OrderSummaryItem = ({ label, value, children }) => (
  <Flex justify="space-between" fontSize="sm" mb={2}>
    <Text color={mode('gray.600', 'gray.400')}>{label}</Text>
    {value ? <Text fontWeight="medium">{value}</Text> : children}
  </Flex>
);

const CartOrderSummary = ({ subtotal }) => (
  <Stack spacing={6} borderWidth="1px" rounded="lg" padding={8} width="full">
    <Heading size="md">Order Summary</Heading>
    <OrderSummaryItem label="Subtotal" value={`$${subtotal.toFixed(2)}`} />
    <OrderSummaryItem label="Shipping + Tax">
      <Link href="#" textDecor="underline">
        Calculate shipping
      </Link>
    </OrderSummaryItem>
    <OrderSummaryItem label="Coupon Code">
      <Link href="#" textDecor="underline">
        Add coupon code
      </Link>
    </OrderSummaryItem>
    <Flex justify="space-between">
      <Text fontSize="lg" fontWeight="semibold">
        Total
      </Text>
      <Text fontSize="xl" fontWeight="extrabold">
      ₹ {subtotal.toFixed(2)} 
      </Text>
    </Flex>
    <Button colorScheme="blue" size="lg" fontSize="md">
      Checkout
    </Button>
  </Stack>
);

const CartPage = () => {
  const cartItemCount = useSelector((state) => state.counter.value);

  const cartItems = [
    {
      id: 1,
      name: 'BUYMECOFFEE',
      description: 'Treat us to a coffee and show your support!',
      quantity: cartItemCount,
      imageUrl: 'coffee.jpg',
      price: 1,
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Box
      maxW={{ base: '3xl', lg: '7xl' }}
      mx="auto"
      px={{ base: '4', md: '8', lg: '12' }}
      py={{ base: '6', md: '8', lg: '12' }}
    >
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        align={{ lg: 'flex-start' }}
        spacing={{ base: '8', md: '16' }}
      >
        <Stack spacing={{ base: '8', md: '10' }} flex="2">
          <Heading fontSize="2xl" fontWeight="extrabold">
            Shopping Cart ({cartItems.length} items)
          </Heading>
          <Stack spacing="6">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                {...item}
                onChangeQuantity={(quantity) => console.log('Quantity changed:', quantity)}
                onClickDelete={() => console.log('Delete clicked')}
              />
            ))}
          </Stack>
        </Stack>
        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary subtotal={subtotal} />
          <Text mt={6}>
            or{' '}
            <Link href="#" color={mode('blue.500', 'blue.200')}>
              Back To Home
            </Link>
          </Text>
        </Flex>
      </Stack>
    </Box>
  );
};

export default CartPage;