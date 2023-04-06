import react from "react";
import router from "next/router";

import {
  Flex,
  Heading,
  Input,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Register() {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.200", "gray.700");

  const registerover = () => {
    let url = "/login";
    router.push(url);
  };

  return (
    <>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" background={formBackground} p={12} rounded={6}>
          <Flex alignItems="center" justifyContent="center">
            <Heading mb={6}>Register</Heading>
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
          <Input type="text" variant="filled" placeholder="name" mb={6} />
          <Input
            type="tel"
            variant="filled"
            placeholder="phone number"
            mb={6}
          />
          <Button onClick={registerover} colorScheme="teal" mb={6}>
            Register
          </Button>
          <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
        </Flex>
      </Flex>
    </>
  );
}
