import React from 'react';
import {createPortal} from 'react-dom';
import {Formik} from 'formik';

import Button from "../../button/Button";
import modalStyles from './ModalForm.module.scss';
import InputComponent from "../../input/Input.component";

const ModalForm = ({isShow, toggleModal, initialValues, onSubmit, error}) => isShow ? createPortal(
    <div className={modalStyles.modal_block}>
        <div className={modalStyles.modal_wrapper} aria-modal aria-hidden role="dialog">
            <div className={modalStyles.modal}>
                <button type="button" className={modalStyles.modal_close_button} data-dismiss="modal" aria-label="Close"
                        onClick={toggleModal}>
                    <span>&times;</span>
                </button>
                <div className={modalStyles.heading_container}>
                    <h3 className={modalStyles.signup_text}>Create Advertisiment</h3>
                    <p className={modalStyles.textQuicklyAndEasy}>
                        Quickly And Easy
                    </p>
                </div>
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                    {({
                          handleSubmit,
                          values,
                          errors,
                          setFieldValue,
                          setFieldError,
                          isSubmitting,
                      }) => {
                        return (
                            <form onSubmit={handleSubmit} className={modalStyles.controls_wrapper} noValidate>
                                <div className={modalStyles.big_input_container}>
                                    <InputComponent onChange={(event) => {
                                        setFieldValue('name', event.target.value)
                                    }} type="text" placeholder="Name" label="Name" value={values.name} size="big"/>
                                    <div>
                                        <div style={{marginBottom: 10}}>Description</div>
                                        <textarea onChange={(event => setFieldValue('description', event.target.value))}
                                                  className={modalStyles.big_input} placeholder="Description"
                                                  value={values.description}/>
                                    </div>
                                    <InputComponent onChange={(event) => {
                                        setFieldValue('price', event.target.value)
                                    }} type="number" placeholder="Price" label="Price" value={values.price} size="big"/>
                                    <InputComponent onChange={(event) => {
                                        setFieldValue('mainPhoto', event.target.value)
                                    }} type="text" placeholder="Main Photo" label="Main Photo" value={values.mainPhoto} size="big"/>


                                    <InputComponent onChange={(event) => {
                                        setFieldValue('firstPhoto', event.target.value)
                                    }} type="text" label="First Photo" placeholder="First Photo (just input link)" value={values.firstPhoto} size="small"/>

                                    <InputComponent onChange={(event) => {
                                        setFieldValue('secondPhoto', event.target.value)
                                    }} type="text" label="Second Photo" placeholder="Second Photo (just input link)" value={values.secondPhoto} size="small"/>

                                    <InputComponent onChange={(event) => {
                                        setFieldValue('thirdPhoto', event.target.value)
                                    }} type="text" label="Third Photo" placeholder="Third Photo (just input link)" value={values.thirdPhoto} size="small"/>

                                </div>
                                <Button text="Create Account" type="submit" />
                            </form>
                        );
                    }}
                </Formik>
                {error && (
                    <span>{error}</span>
                )}
            </div>
        </div>
    </div>, document.body
) : null

export default ModalForm;
