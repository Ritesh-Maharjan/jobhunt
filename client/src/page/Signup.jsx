import React from "react";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { createUser } from "../api/UserApi";

function Signup() {

  const [file,setFile] = useState("");

  const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    phone: Yup.string()
      .required()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Must be exactly 10 digits")
      .max(10, "Must be exactly 10 digits"),
    roles: Yup.string().required(),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
    phone: "",
    roles: "Company",
  };

  const onSubmit = async (values) => {

    let formData = new FormData()
    formData.append("name", values.name)
    formData.append("email", values.email)
    formData.append("password", values.password)
    formData.append("phone", values.phone)
    formData.append("roles", values.roles)
    formData.append("avatar", file)

    const data = await createUser(formData)
    console.log(data)
  };

  const renderError = (message) => <p className="help is-danger">{message}</p>;


  return (
    <div>
      <div className="flex justify-center h-[90vh]">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            await onSubmit(values);

            // resetForm();
          }}
        >
          <Form className="w-[90vw] border-2 border-black rounded-lg shadow-2xl p-6 mt-2 m-auto">
            <h1 className="font-bold text-3xl my-4">Sign up</h1>

            <div className="my-4">
              <label className="block text-gray-500 font-bold" htmlFor="name">
                Name:
              </label>
              <div>
                <Field
                  className="border-2 w-full p-2  "
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                />
                <ErrorMessage name="name" render={renderError} />
              </div>
            </div>

            <div className="my-4">
              <label className="block text-gray-500 font-bold">Email:</label>
              <div>
                <Field
                  className="border-2 w-full p-2  "
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
                <ErrorMessage name="email" render={renderError} />
              </div>
            </div>

            <div className="my-4">
              <label className="block text-gray-500 font-bold">Password:</label>
              <div>
                <Field
                  className="border-2 w-full p-2  "
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
                <ErrorMessage name="password" render={renderError} />
              </div>
            </div>

            <div className="my-4">
              <label className="block text-gray-500 font-bold">Phone:</label>
              <div>
                <Field
                  className="border-2 w-full p-2  "
                  type="number"
                  name="phone"
                  placeholder="Enter your phone number"
                  onWheel={(e) => e.target.blur()}
                />
                <ErrorMessage name="phone" render={renderError} />
              </div>
            </div>

            <div className="my-4">
              <label className="block text-gray-500 font-bold">Roles:</label>
              <div className="flex flex-col">
                <div>
                  <Field
                    type="radio"
                    name="roles"
                    value="Company"
                    id="Company"
                  />
                  <label htmlFor="Company" className="ml-1 mr-2">
                    Company
                  </label>
                  <Field
                    type="radio"
                    name="roles"
                    value="Job seeker"
                    id="Job seeker"
                  />
                  <label htmlFor="Job seeker" className="ml-1">
                    Job seeker
                  </label>
                </div>
                <ErrorMessage name="roles" render={renderError} />
              </div>
            </div>

            <div className="my-4">
              <input
                className="file:mr-2 file:py-1 file:px-4 text-sm file:rounded-full file:text-sm cursor-pointer"
                type="file"              
                name="avatar"
                onChange={(event) => {
                  setFile(event.target.files[0])}}
              />
            </div>

            <button
              type="submit"
              className="border-2 my-4 px-5 py-2 hover:bg-black hover:text-white"
            >
              Signup
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Signup;
