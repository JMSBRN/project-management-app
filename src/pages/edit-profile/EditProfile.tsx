import { useAppDispatch, useAppSelector } from 'app/hooks';
import Form, { FormValues } from 'components/form/Form';
import ModalDelete from 'components/modalDelete/ModalDelete';
import {
  apiSliceDeleteUser,
  apiSliceGetIdUser,
  apiSliceSignIn,
  selectApi,
} from 'features/api/ApiSlice';
import React, { useState } from 'react';
import { EditProfileWrapper, ErrorMessage } from './EditProfile.style';

const EditProfile = () => {
  const dispatch = useAppDispatch();
  const { errorApiMessage, deleteStatusMessage } = useAppSelector(selectApi);
  const { idLoggedUser } = useAppSelector(selectApi);
  const [isModal, setIsModal] = useState(false);

  const onSubmit = (data: FormValues) => {
    dispatch(apiSliceSignIn(data));
    dispatch(apiSliceGetIdUser(data));
  };
  const handleDeleUser = () => {
    dispatch(apiSliceDeleteUser(idLoggedUser));
  };
  return (
    <EditProfileWrapper>
      {isModal && <ModalDelete setDelete={handleDeleUser} setisDelete={setIsModal} />}
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
