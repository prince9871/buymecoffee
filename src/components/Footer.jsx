'use client'

import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Icon
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { IoLogoGooglePlaystore as PlayStoreBadge } from 'react-icons/io5';
import { FaAppStore as AppStoreBadge } from 'react-icons/fa';

const ListHeader = ({ children }) => (
  <Text fontWeight={'bold'} fontSize={'lg'} mb={3}>
    {children}
  </Text>
);

const SocialButton = ({ label, href, children }) => (
  <chakra.button
    bg={useColorModeValue('gray.200', 'gray.600')}
    rounded={'full'}
    w={10}
    h={10}
    cursor={'pointer'}
    as={'a'}
    href={href}
    display={'inline-flex'}
    alignItems={'center'}
    justifyContent={'center'}
    transition={'background 0.3s ease, transform 0.3s ease'}
    _hover={{
      bg: useColorModeValue('gray.300', 'gray.500'),
      transform: 'scale(1.1)',
    }}
    aria-label={label}
  >
    <VisuallyHidden>{label}</VisuallyHidden>
    {children}
  </chakra.button>
);

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      py={10}
    >

      <Container maxW={'6xl'}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Box as="a" href={'#'} _hover={{ textDecoration: 'underline' }}>About Us</Box>
            <Box as="a" href={'#'} _hover={{ textDecoration: 'underline' }}>Blog</Box>
            <Box as="a" href={'#'} _hover={{ textDecoration: 'underline' }}>Careers</Box>
            <Box as="a" href={'#'} _hover={{ textDecoration: 'underline' }}>Contact Us</Box>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Box as="a" href={'#'} _hover={{ textDecoration: 'underline' }}>Help Center</Box>
            <Box as="a" href={'#'} _hover={{ textDecoration: 'underline' }}>Safety Center</Box>
            <Box as="a" href={'#'} _hover={{ textDecoration: 'underline' }}>Community Guidelines</Box>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <Box as="a" href={'#'} _hover={{ textDecoration: 'underline' }}>Cookies Policy</Box>
            <Box as="a" href={'#'} _hover={{ textDecoration: 'underline' }}>Privacy Policy</Box>
            <Box as="a" href={'#'} _hover={{ textDecoration: 'underline' }}>Terms of Service</Box>
            <Box as="a" href={'#'} _hover={{ textDecoration: 'underline' }}>Law Enforcement</Box>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Install App</ListHeader>
            <AppStoreBadge size={26} />
            <PlayStoreBadge size={26} />
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        py={4}
      >
        <Container
          maxW={'6xl'}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}
        >
          {/* <Text fontSize={'sm'}>© 2024 Your Company. All rights reserved.</Text> */}
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'https://twitter.com'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'https://youtube.com'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'https://instagram.com'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
