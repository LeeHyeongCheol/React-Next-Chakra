import React from "react";
import router from "next/router";
import {
  Flex,
  Heading,
  Input,
  Button,
  useColorMode,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

export default function Home() {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.200", "gray.700");

  const loginstatus = () => {
    let url = "/";
    router.push(url);
  };

  const registerstatus = () => {
    let url = "/register";
    router.push(url);
  };

  return (
    <>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" background={formBackground} p={12} rounded={6}>
          <Flex alignItems="center" justifyContent="center">
            <Heading mb={6}>Log in</Heading>
          </Flex>
          <Input
            type="email"
            variant="filled"
            placeholder="hongidong@gmail.com"
            mb={3}
          />
          <Input
            type="password"
            variant="filled"
            placeholder="*********"
            mb={6}
          />
          <Button onClick={loginstatus} colorScheme="teal" mb={3}>
            Log in
          </Button>
          <Button onClick={registerstatus} mb={3}>
            Register
          </Button>
          <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
        </Flex>
      </Flex>
    </>
  );
}
