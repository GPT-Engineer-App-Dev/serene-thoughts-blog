import { Box, Container, Flex, Heading, Text, VStack, Link, HStack, Spacer } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="gray.800" color="white" py={4}>
        <Container maxW="container.lg">
          <Flex align="center">
            <Heading as="h1" size="lg">My Blog</Heading>
            <Spacer />
            <HStack spacing={4}>
              <Link href="#" color="white">Home</Link>
              <Link href="#" color="white">About</Link>
              <Link href="#" color="white">Contact</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Container maxW="container.lg" py={10}>
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading as="h2" size="xl">Welcome to My Blog</Heading>
            <Text mt={4}>This is a place where I share my thoughts, experiences, and stories. Stay tuned for more updates!</Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg">Latest Posts</Heading>
            <VStack spacing={4} mt={4} align="stretch">
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">Post Title 1</Heading>
                <Text mt={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
              </Box>
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">Post Title 2</Heading>
                <Text mt={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={4} mt={10}>
        <Container maxW="container.lg">
          <Flex align="center" justify="space-between">
            <Text>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</Text>
            <HStack spacing={4}>
              <Link href="https://twitter.com" isExternal>
                <FaTwitter />
              </Link>
              <Link href="https://linkedin.com" isExternal>
                <FaLinkedin />
              </Link>
              <Link href="https://github.com" isExternal>
                <FaGithub />
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;