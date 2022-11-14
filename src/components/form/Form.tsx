import { useAppDispatch } from "app/hooks";
import { setUser } from "features/user/UserSlice";
import React, { useEffect, useState } from "react";
import { FormWrapper } from "./Form.style";
interface IFormProps {
  label: string;
  isNameInput?: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
const Form = (props: IFormProps) => {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  useEffect(() => {
    const currUser = { name: name, login: login, password: password };
    dispatch(setUser(currUser));
  }, [dispatch, login, name, password]);

  return (
    <FormWrapper onSubmit={(e) => props.onSubmit(e)}>
      {props.label}
      {props.isNameInput && (
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
      )}
      <input
        type="text"
        placeholder="login"
        onChange={(e) => setLogin(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" />
    </FormWrapper>
  );
};
export default Form;
