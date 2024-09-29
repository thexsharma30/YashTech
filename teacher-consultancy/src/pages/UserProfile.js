// src/pages/UserProfile.js
import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/UserProfile.css';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  // Load user data from local storage
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('currentUser')) || null;
    setUser(userData);
  }, []);

  const initialValues = {
    profilePic: null,
    dob: user ? user.dob : '',
    email: user ? user.email : '',
    password: user ? user.password : '',
    class: user ? user.class : '',
    educationalDetails: user ? user.educationalDetails : '',
    address: user ? user.address : '',
  };

  const validationSchema = Yup.object({
    dob: Yup.string().required('Date of Birth is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required'),
    class: Yup.string().required('Class is required'),
    educationalDetails: Yup.string().required('Educational details are required'),
    address: Yup.string().required('Address is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Mock saving user data in local storage
    const updatedUser = { ...user, ...values };
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    alert('Profile updated successfully!');
    setSubmitting(false);
  };

  if (!user) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, isSubmitting }) => (
          <Form>
            <div>
              <label>Profile Picture</label>
              <input
                type="file"
                name="profilePic"
                onChange={(event) => setFieldValue('profilePic', event.currentTarget.files[0])}
              />
              <ErrorMessage name="profilePic" component="div" />
            </div>
            <div>
              <label>Date of Birth</label>
              <Field type="date" name="dob" />
              <ErrorMessage name="dob" component="div" />
            </div>
            <div>
              <label>Email</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <label>Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <div>
              <label>Class</label>
              <Field type="text" name="class" />
              <ErrorMessage name="class" component="div" />
            </div>
            <div>
              <label>Educational Details</label>
              <Field type="text" name="educationalDetails" />
              <ErrorMessage name="educationalDetails" component="div" />
            </div>
            <div>
              <label>Address</label>
              <Field type="text" name="address" />
              <ErrorMessage name="address" component="div" />
            </div>
            <div>
              <button type="submit" disabled={isSubmitting}>Save Changes</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserProfile;
