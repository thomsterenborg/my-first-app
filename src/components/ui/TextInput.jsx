import { Input } from "@chakra-ui/react";
import "./TextInput.css";

export const TextInput = ({ onChange, ...props }) => (
  <Input variant={"filled"} onChange={onChange} {...props}></Input>
);
