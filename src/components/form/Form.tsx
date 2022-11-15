import { useAppDispatch } from "app/hooks";
import { setIsLogin } from "features/user/UserSlice";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  ButtonWrapper,
  FormWrapper,
  InputWrapper,
  LabelWrapper,
} from "./Form.style";
interface IFormProps {
  label: string;
}

interface FormValues {
  login: string;
  password: string;
  email: string;
}

const Form = (props: IFormProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: "onChange",
  });
  const onSubmit = (data: FormValues) => {
    dispatch(setIsLogin(true));
    navigate("/");
    console.log(data);
    reset();
  };
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      {props.label}
      {props.label === "sing up Form" ? (
        <LabelWrapper>
          email
          <InputWrapper
            type="email"
            {...register("email", {
              required: "Enter your email",
              minLength: {
                value: 2,
                message: "Email must be more than one letter",
              },
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "email must contain @ and domain",
              },
            })}
          />
          <div>{errors?.email && errors.email.message}</div>
        </LabelWrapper>
      ) : null}
      <LabelWrapper>
        login
        <InputWrapper
          type="text"
          {...register("login", {
            required: "Enter your login",
            minLength: {
              value: 2,
              message: "Login must be more than one letter",
            },
          })}
        />
        <div>{errors?.login && errors.login.message}</div>
      </LabelWrapper>
      <LabelWrapper>
        password
        <InputWrapper
          type="password"
          {...register("password", {
            required: "Enter your password",
            minLength: {
              value: 7,
              message: "Password cannot be shorter than 5 characters",
            },
          })}
        />
        <div>{errors?.password && errors.password.message}</div>
      </LabelWrapper>
      <ButtonWrapper type="submit" disabled={!isValid} isValid={isValid}>
        Submit
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default Form;
