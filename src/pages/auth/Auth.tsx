import React from "react";
import Form from "components/form/Form";
import { setIsLogin } from "features/user/UserSlice";
import { useAppDispatch } from "app/hooks";
import { useNavigate } from "react-router-dom";
import { AuthtFormWRapper, AuthtWrapper } from "./Auth.style";

interface IAuthProps {
  isSingInForm: boolean;
}
const Auth = (props: IAuthProps) => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setIsLogin(true));
    navigate("/");
  };
  const dispatch = useAppDispatch();
  return (
    <AuthtWrapper>
      <AuthtFormWRapper>
        {props.isSingInForm ? (
          <Form onSubmit={(e) => handleSubmit(e)} label="sing in Form" />
        ) : (
          <Form onSubmit={(e) => handleSubmit(e)} label="sing out Form" />
        )}
      </AuthtFormWRapper>
    </AuthtWrapper>
  );
};

export default Auth;
