// src/pages/TeacherRegistration.js
import '../styles/TeacherRegistration.css';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const TeacherRegistration = () => {
  const initialValues = {
    name: '',
    address: '',
    contactNo: '',
    aadharNo: '',
    aadharCard: null,
    profilePicture: null,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    address: Yup.string().required('Address is required'),
    contactNo: Yup.string().required('Contact Number is required'),
    aadharNo: Yup.string().required('Aadhar Number is required'),
    aadharCard: Yup.mixed().required('Aadhar Card is required'),
    profilePicture: Yup.mixed().required('Profile Picture is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('address', values.address);
    formData.append('contactNo', values.contactNo);
    formData.append('aadharNo', values.aadharNo);
    formData.append('aadharCard', values.aadharCard);
    formData.append('profilePicture', values.profilePicture);

    axios.post('/api/teachers/register', formData)
      .then(response => {
        alert('Teacher registered successfully!');
        setSubmitting(false);
      })
      .catch(error => {
        alert('Error registering teacher');
        setSubmitting(false);
      });
  };

  return (
    <div className="registration-form">
      <h2>Teacher Registration</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, isSubmitting }) => (
          <Form>
            <div>
              <label>Name</label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <label>Address</label>
              <Field type="text" name="address" />
              <ErrorMessage name="address" component="div" />
            </div>
            <div>
              <label>Contact Number</label>
              <Field type="text" name="contactNo" />
              <ErrorMessage name="contactNo" component="div" />
            </div>
            <div>
              <label>Aadhar Number</label>
              <Field type="text" name="aadharNo" />
              <ErrorMessage name="aadharNo" component="div" />
            </div>
            <div>
              <label>Aadhar Card</label>
              <input
                type="file"
                name="aadharCard"
                onChange={(event) => setFieldValue("aadharCard", event.target.files[0])}
              />
              <ErrorMessage name="aadharCard" component="div" />
            </div>
            <div>
              <label>Profile Picture</label>
              <input
                type="file"
                name="profilePicture"
                onChange={(event) => setFieldValue("profilePicture", event.target.files[0])}
              />
              <ErrorMessage name="profilePicture" component="div" />
            </div>
            <div>
              <button type="submit" disabled={isSubmitting}>Register</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TeacherRegistration;
