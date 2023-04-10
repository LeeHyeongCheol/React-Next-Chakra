import React, { useState } from "react";
import Image from "next/image";
import {
  Flex,
  Button,
  Link,
  Text,
  Box,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import pngegg from "../../public/pngegg.png";

export default function Nav() {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.200", "gray.700");

  return (
    <>
      <Box
        position="fixed"
        top={0}
        w="100%"
        zIndex={50}
        background={formBackground}
      >
        <Flex justifyContent="space-around">
          <Image
            src={pngegg}
            alt="logo"
            width={70}
            height={70}
            placeholder="blur"
          />
          <Flex justifyContent="flex-end" pt={6}>
            <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
            <Link
              href="/login"
              color="blue.400"
              _hover={{ color: "blue.500" }}
              ml={5}
            >
              <Button colorScheme="teal">Login</Button>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
