import React from "react";
import { FormWrapper } from "./Form.style";
interface IFormProps {
  label: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
const Form = (props: IFormProps) => {
  return (
    <FormWrapper onSubmit={(e) => props.onSubmit(e)}>
      {props.label}
      <input type="text" />
      <input type="password" />
      <input type="eamil" />
      <input type="date" />
      <input type="submit" />
    </FormWrapper>
  );
};

export default Form;
