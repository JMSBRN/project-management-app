import { useAppDispatch, useAppSelector } from 'app/hooks';
import Form, { FormValues } from 'components/form/Form';
import ModalDelete from 'components/modalDelete/ModalDelete';
import { selectApi, setSignOut } from 'features/api/ApiSlice';
import { deleteUserThunk } from 'features/api/thunks/deleteUserThunk';
import { getUserIdThunk } from 'features/api/thunks/getUserIdThunk';
import { signInThunk } from 'features/api/thunks/signInThunk';
import React, { useState } from 'react';
import { EditProfileWrapper, ErrorMessage } from './EditProfile.style';

const EditProfile = () => {
  const dispatch = useAppDispatch();
  const { errorApiMessage, deleteStatusMessage } = useAppSelector(selectApi);
  const { loggedUserId } = useAppSelector(selectApi);
  const [isModal, setIsModal] = useState(false);

  const onSubmit = (data: FormValues) => {
    dispatch(signInThunk(data));
    dispatch(getUserIdThunk(data));
  };
  const handleDeleUser = () => {
    dispatch(deleteUserThunk(loggedUserId));
    dispatch(setSignOut());
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
        isGetIdUser={!!loggedUserId}
        label={'edit profile form'}
        isEditProfileForm={true}
      />
    </EditProfileWrapper>
  );
};

export default EditProfile;
