import {
  Flex,
  Button,
  Link,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";

import { useState } from "react";
import { useQuery } from "react-query";
import Image from 'next/image';

import pngegg1 from "../../public/pngegg1.png";
import pngegg2 from "../../public/pngegg2.png";
import pngegg3 from "../../public/pngegg3.png";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";

const fetchImg = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  return res.json();
};

export default function Home() {
  const result = useQuery("randomimg", fetchImg);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [id_result, setId_result] = useState(0);
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.200", "gray.700");

  const modalstate = (id: number) => {
    setId_result(id - 1);
    onOpen();
  };

  return (
    <>
      <Box background={formBackground}>
        <Flex
          justifyContent="flex-end"
          pt={10}
          mr={20}
        >
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
        <Flex justifyContent="center">
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
          >
            Welcome to My World!
          </Text>
        </Flex>
        <Flex
          justifyContent="center"
          // style={{ display: "flex", justifyContent: "center" }}
        >
          <Splide
            aria-label="私のお気に入りの画像集"
            options={{
              autoplay: true,
              interval: 3000,
              rewind: true,
              width: "50%",
              gap: "1rem",
            }}
          >
            <SplideSlide>
              <Image
                src={pngegg1}
                alt="pngegg1"
                placeholder="blur"
                style={{ position: "relative", top: "7%" }}
              />
            </SplideSlide>
            <SplideSlide>
              <Image src={pngegg2} alt="pngegg2" placeholder="blur" />
            </SplideSlide>
            <SplideSlide>
              <Image src={pngegg3} alt="pngegg3" placeholder="blur" />
            </SplideSlide>
          </Splide>
        </Flex>
        <TableContainer
          width={{ xl: "55%", md: "74%", sm: "91%" }}
          position="relative"
          left={{ xl: "22.5%", md: "14%", sm: "4%" }}
          fontSize={{ xl: "15px", md: "12px", sm: "11px" }}
        >
          <Table variant="striped" colorScheme="teal">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>To Name</Th>
                <Th>Email</Th>
                <Th isNumeric>By Phone</Th>
              </Tr>
            </Thead>
            <Tbody cursor="pointer">
              {result.data?.map((user: any) => (
                <Tr onClick={() => modalstate(user.id)} key={user.id}>
                  <Td>{user.name}</Td>
                  <Td>{user.email}</Td>
                  <Td isNumeric>{user.phone}</Td>
                </Tr>
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>To Name</Th>
                <Th>Email</Th>
                <Th isNumeric>By Phone</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
        {result.data && (
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{result.data[id_result].name}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                Email:{result.data[id_result].email}
                <br />
                Phone:{result.data[id_result].phone}
                <br />
                Address
                <br />
                street:{result.data[id_result].address.street}
                <br />
                suite:{result.data[id_result].address.suite}
                <br />
                city:{result.data[id_result].address.city}
                <br />
                zipcode:{result.data[id_result].address.zipcode}
                <br />
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost">Secondary Action</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </Box>
    </>
  );
}
