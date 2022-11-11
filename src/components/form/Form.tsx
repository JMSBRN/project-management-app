import React from "react";
import { FormWrapper } from "./Form.style";
interface IFormProps {
  label: string;
}
const Form = (props: IFormProps) => {
  return (
    <FormWrapper>
      {props.label}
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="submit" />
    </FormWrapper>
  );
};

export default Form;
