import Email from "components/email/Email";
import React from "react";
import {
  ButtonWrapper,
  FormWrapper,
  InputWrapper,
  LabelWrapper,
} from "./Form.style";
interface IFormProps {
  label: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
const Form = (props: IFormProps) => {
  return (
    <FormWrapper onSubmit={(e) => props.onSubmit(e)}>
      {props.label}
      {props.label === "sing up Form" ? <Email /> : null}
      <LabelWrapper>
        login
        <InputWrapper type="text" />
      </LabelWrapper>
      <LabelWrapper>
        password
        <InputWrapper type="password" />
      </LabelWrapper>
      <ButtonWrapper>Submit</ButtonWrapper>
    </FormWrapper>
  );
};

export default Form;
