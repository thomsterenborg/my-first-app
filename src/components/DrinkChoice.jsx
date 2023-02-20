import {
  Center,
  Flex,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Button } from "./ui/Button";

export const DrinkChoice = ({ drink, onClick }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Center flexDir={"column"} gap={4}>
      <Heading fontSize={"3xl"} color="blue.700">
        Your choice: {drink.name}
      </Heading>
      <Image
        src={drink.imgUrl}
        w={100}
        h={100}
        borderRadius="2xl"
        alt={drink.alt}
      />
      <Text>Your drink will be ready in a few minutes</Text>
      <Flex>
        <Button mr={4} onClick={onOpen} text={"Confirm your order"} />
        <Button onClick={() => onClick()} text={"Change selection"} />
      </Flex>
      <Modal
        size={{ base: "full", md: "md" }}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalHeader>Confirm your choice</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Do you really want to order {drink.name}?</Text>
            <Image
              src={drink.imgUrl}
              w={100}
              h={100}
              borderRadius="2xl"
              alt={drink.alt}
            />
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose} text={"Confirm"} />
            <Button variant="ghost" onClick={() => onClick()} text={"Cancel"} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
};
