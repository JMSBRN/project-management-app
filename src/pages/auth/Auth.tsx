import React from "react";
import Form from "components/form/Form";
import { selectUser } from "features/user/UserSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { useNavigate } from "react-router-dom";
import { AuthtFormWRapper, AuthtWrapper } from "./Auth.style";
import { apiSliceSignIn, apiSliceSignUp } from "features/api/ApiSlice";

interface IAuthProps {
  isSingInForm: boolean;
}
const Auth = (props: IAuthProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(selectUser);
  const handleSignInSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/");
    dispatch(apiSliceSignIn(user));
  };
  const handleSignUpSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/");
    dispatch(apiSliceSignUp(user));
  };
  return (
    <AuthtWrapper>
      <AuthtFormWRapper>
        {props.isSingInForm ? (
          <Form onSubmit={(e) => handleSignInSubmit(e)} label="sing in Form" />
        ) : (
          <Form
            isNameInput={true}
            onSubmit={(e) => handleSignUpSubmit(e)}
            label="sing out Form"
          />
        )}
      </AuthtFormWRapper>
    </AuthtWrapper>
  );
};

export default Auth;
