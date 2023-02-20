import { Button as CButton } from "@chakra-ui/react";
import "./Button.css";

export const Button = ({ onClick, ...props }) => (
  <CButton colorScheme={"blue"} mt={4} onClick={onClick} {...props}>
    {props.text}
  </CButton>
);
