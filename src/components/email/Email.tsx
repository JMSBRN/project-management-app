import { InputWrapper, LabelWrapper } from "components/form/Form.style";
import React from "react";

const Email = () => {
  return (
    <LabelWrapper>
      email
      <InputWrapper type="email" />
    </LabelWrapper>
  );
};

export default Email;
