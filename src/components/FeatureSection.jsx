import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5'

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}

export default function FeatureSection() {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Our Story
          </Text>
          <Heading>Support Our Mission to Empower Creativity</Heading>
<Text color={'gray.500'} fontSize={'lg'}>
  Your contribution can make a significant impact. By supporting us, you are enabling innovation and helping to bring creative solutions to life. Together, we can build a better future, one project at a time.
</Text>
<Stack
  spacing={4}
  divider={<StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />}>
  <Feature
    icon={<Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />}
    iconBg={useColorModeValue('yellow.100', 'yellow.900')}
    text={'Empowering Innovation'}
  />
  <Feature
    icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
    iconBg={useColorModeValue('green.100', 'green.900')}
    text={'Supporting Sustainable Growth'}
  />
  <Feature
    icon={<Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />}
    iconBg={useColorModeValue('purple.100', 'purple.900')}
    text={'Fueling Creative Minds'}
  />
</Stack>
</Stack>
<Flex>
  <Image
    rounded={'md'}
    alt={'Support our mission'}
    src={'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}
    objectFit={'cover'}
  />
</Flex>

      </SimpleGrid>
    </Container>
  )
}
