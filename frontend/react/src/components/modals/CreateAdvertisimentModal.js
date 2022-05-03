import React from 'react';
import ModalForm from "./modal/ModalForm";

const CreateAdvertisimentModal = ({isShow, toggleModal, createAdvertisiment, error}) => {
  return <ModalForm
    onSubmit={createAdvertisiment}
    isShow={isShow} error={error}
    toggleModal={toggleModal}
    initialValues={{name: '', description: '', price: '', mainPhoto: '', firstPhoto: '', secondPhoto: '', thirdPhoto: ''}}/>
}

export default CreateAdvertisimentModal;
