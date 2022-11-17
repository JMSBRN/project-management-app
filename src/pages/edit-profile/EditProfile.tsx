import { useAppDispatch, useAppSelector } from 'app/hooks';
import Form, { FormValues } from 'components/form/Form';
import {
  apiSliceDeleteUser,
  apiSliceGetIdUser,
  apiSliceSignIn,
  selectApi,
} from 'features/api/ApiSlice';
import React from 'react';
import { EditProfileWrapper, ErrorMessage } from './EditProfile.style';

const EditProfile = () => {
  const dispatch = useAppDispatch();
  const { errorApiMessage, dleteStatusMessage } = useAppSelector(selectApi);
  const { idLoggedUser } = useAppSelector(selectApi);
  const handleDeleteUseryId = () => {
    dispatch(apiSliceDeleteUser(idLoggedUser));
  };
  const onSubmit = (data: FormValues) => {
    dispatch(apiSliceSignIn(data));
    dispatch(apiSliceGetIdUser(data));
  };
  return (
    <EditProfileWrapper>
      <ErrorMessage>
        {errorApiMessage}
        {dleteStatusMessage === 'No Content'
          ? ' User deleted '
          : dleteStatusMessage === 'Not Found' && 'User not found'}
      </ErrorMessage>
      <Form
        onClickDeletUserBtn={handleDeleteUseryId}
        onSumiteEditProfeileForm={onSubmit}
        isGetIdUser={!!idLoggedUser}
        label={'edit profile form'}
        isEditProfileForm={true}
      />
    </EditProfileWrapper>
  );
};

export default EditProfile;
