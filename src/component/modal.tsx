import React from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

export default function modal(id: number, data: any) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (id) {
    console.log(1);
    onOpen();
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{data[id].name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Email:{data[id].email}
            <br />
            Phone:{data[id].phone}
            <br />
            Address
            <br />
            street:{data[id].address.street}
            <br />
            suite:{data[id].address.suite}
            <br />
            city:{data[id].address.city}
            <br />
            zipcode:{data[id].address.zipcode}
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
    </>
  );
}
