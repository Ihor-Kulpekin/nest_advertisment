import React from 'react';
import {createPortal} from 'react-dom';
import {Formik} from 'formik';

import Button from "../../button/Button";
import modalStyles from './ModalForm.module.scss';

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
                                    <input onChange={(event) => {
                                        setFieldValue('name', event.target.value)
                                    }} type="text" className={modalStyles.big_input} placeholder="Name" value={values.name}/>
                                    <textarea onChange={(event => setFieldValue('description', event.target.value))}
                                              className={modalStyles.big_input} placeholder="Description"
                                           value={values.description}/>
                                    <input onChange={(event) => {
                                        setFieldValue('price', event.target.value)
                                    }} type="number" className={modalStyles.big_input} placeholder="Price" value={values.price}/>
                                    <input onChange={(event) => {
                                        setFieldValue('mainPhoto', event.target.value)
                                    }} type="text" className={modalStyles.big_input} placeholder="Main Photo" value={values.mainPhoto}/>

                                    <div className={modalStyles.inputs}>
                                        <input onChange={(event) => {
                                            setFieldValue('firstPhoto', event.target.value)
                                        }} type="text" className={modalStyles.input} placeholder="First Photo (just input link)" value={values.firstPhoto}/>
                                        <input onChange={(event) => {
                                            setFieldValue('secondPhoto', event.target.value)
                                        }} type="text" className={modalStyles.input} placeholder="Second Photo (just input link)" value={values.secondPhoto}/>
                                        <input onChange={(event) => {
                                            setFieldValue('thirdPhoto', event.target.value)
                                        }} type="text" className={modalStyles.input} placeholder="Third Photo (just input link)" value={values.thirdPhoto}/>
                                    </div>
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
