import {
  Box,
  Flex,
  HStack,
  Heading,
  Link,
  Stack,
  useColorModeValue as mode
} from '@chakra-ui/react'
import { CartItem } from './Cart/CartItem'
import { CartOrderSummary } from './Cart/CartOrderSummary'
import { cartData } from './Cart/data'

import React from 'react'

const CartPage = () => {
  return (
    <Box

      maxW={{ base: '3xl', lg: '7xl' }}
      mx='auto'
      px={{ base: '4', md: '8', lg: '12' }}
      py={{ base: '6', md: '8', lg: '12' }}
    >
    
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        align={{ lg: 'flex-start' }}
        spacing={{ base: '8', md: '16' }}
      >
        <Stack spacing={{ base: '8', md: '10' }} flex='2'>
          <Heading fontSize='2xl' fontWeight='extrabold'>
            Shopping Cart (3 items)
          </Heading>
  
          <Stack spacing='6'>
            {cartData.map(item => (
              <CartItem key={item.id} {...item} />
            ))}
          </Stack>
        </Stack>
  
        <Flex direction='column' align='center' flex='1'>
          <CartOrderSummary />
          <HStack mt='6' fontWeight='semibold'>
            <p>or</p>
            <Link color={mode('blue.500', 'blue.200')}>Continue shopping</Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  )
}

export default CartPage

