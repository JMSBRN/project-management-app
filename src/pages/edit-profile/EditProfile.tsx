import Form from 'components/form/Form';
import React from 'react';
import { EditProfileWrapper } from './EditProfile.style';

const EditProfile = () => {
  const handleDeleteUseryId = () => {};
  return (
    <EditProfileWrapper>
      <Form
        onClickDeletUserBtn={handleDeleteUseryId}
        isGetIdUser={true}
        label={'edit profile form'}
        isEditProfileForm={true}
      />
    </EditProfileWrapper>
  );
};

export default EditProfile;
