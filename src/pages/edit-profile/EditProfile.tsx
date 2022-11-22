import { useAppDispatch, useAppSelector } from 'app/hooks';
import Form, { FormValues } from 'components/form/Form';
import {
  apiSliceDeleteUser,
  apiSliceGetIdUser,
  apiSliceSignIn,
  selectApi,
  setAuthorised,
  setUserName,
  setToken,
} from 'features/api/ApiSlice';
import React, { useState } from 'react';
import {
  Btn,
  BtnWrapper,
  CloseBtn,
  DeletedUserModal,
  EditProfileWrapper,
  ErrorMessage,
  Title,
} from './EditProfile.style';

const EditProfile = () => {
  const dispatch = useAppDispatch();
  const { errorApiMessage, deleteStatusMessage } = useAppSelector(selectApi);
  const { idLoggedUser } = useAppSelector(selectApi);
  const [isModal, setIsModal] = useState(false);

  const onSubmit = (data: FormValues) => {
    dispatch(apiSliceSignIn(data));
    dispatch(apiSliceGetIdUser(data));
  };
  const handleSingOut = () => {
    dispatch(setAuthorised(false));
    dispatch(setToken(''));
    dispatch(setUserName(''));
    localStorage.removeItem('user-name');
  };
  const handleDeleUser = () => {
    dispatch(apiSliceDeleteUser(idLoggedUser));
  };
  return (
    <EditProfileWrapper>
      {isModal && (
        <DeletedUserModal>
          <Title>Please decide what you prefer totd with in this case</Title>
          <BtnWrapper>
            <CloseBtn onClick={() => setIsModal(false)}>close</CloseBtn>
            <Btn onClick={() => handleSingOut()}>sign-out</Btn>
            <Btn onClick={() => handleDeleUser()}>delete from base</Btn>
          </BtnWrapper>
        </DeletedUserModal>
      )}
      <ErrorMessage>
        {errorApiMessage}
        {deleteStatusMessage === 'No Content'
          ? ' User deleted '
          : deleteStatusMessage === 'Not Found' && 'User not found'}
      </ErrorMessage>
      <Form
        onClickDeletUserBtn={() => setIsModal(true)}
        onSumiteEditProfeileForm={onSubmit}
        isGetIdUser={!!idLoggedUser}
        label={'edit profile form'}
        isEditProfileForm={true}
      />
    </EditProfileWrapper>
  );
};

export default EditProfile;
