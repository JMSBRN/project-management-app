import { useAppDispatch, useAppSelector } from 'app/hooks';
import Form, { FormValues } from 'components/form/Form';
import { apiSliceDeleteUser, selectApi } from 'features/api/ApiSlice';
import { deleteUser } from 'features/api/apiUtils';
import React from 'react';
import { EditProfileWrapper } from './EditProfile.style';

const EditProfile = () => {
  const dispatch = useAppDispatch();
  const { idLoggedUser } = useAppSelector(selectApi);
  const handleDeleteUseryId = () => {
    deleteUser(idLoggedUser);
  };
  const onSubmit = (data: FormValues) => {
    dispatch(apiSliceDeleteUser(data));
  };
  return (
    <EditProfileWrapper>
      <Form
        onClickDeletUserBtn={handleDeleteUseryId}
        onSumiteEditProfeileForm={onSubmit}
        isGetIdUser={true}
        label={'edit profile form'}
        isEditProfileForm={true}
      />
    </EditProfileWrapper>
  );
};

export default EditProfile;
