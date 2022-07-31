import React from "react";
import '../style/formCss.css'
import { Formik } from 'formik'
import * as yup from 'yup'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
const Form = () => {

    return (
        <Formik initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            city: '',
            phoneNumber: '',
            id: '',
            gender: '',
            acc: ''
        }}
            validationSchema={yup.object({
                firstName: yup.string().required(),
                lastName: yup.string().required(),
                email: yup.string().email().required(),
                city: yup.string().required(),
                phoneNumber: yup.number().positive().integer(),
                id: yup.number().positive().integer(),
                gender: yup.string().required(),
                acc: yup.boolean()

            })}
            onSubmit={(values) => {
                console.log(values);
                toast.success('Submited !', { autoClose: 3000 })
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <form className="container bg-dark" onSubmit={handleSubmit}>
                    <div className="row g-2 mt-5">
                        <div className="col  p-4">
                            <div className="mb-3">
                                <label className="form-label text-light" >First Name :</label>
                                <input type='text'
                                    className="form-control"
                                    name="firstName"
                                    placeholder="write here ..."
                                    value={values.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                            {errors.firstName ?
                                <span className="text-light">{errors.firstName}</span>
                                : null}
                        </div>
                        <div className="col p-4">
                            <div className="mb-3">
                                <label className="form-label text-light " placeholder="write here ...">Last Name :</label>
                                <input type='text'
                                    className="form-control"
                                    name="lastName"
                                    placeholder="write here ..."
                                    value={values.lastName}
                                    onChange={handleChange}
                                />
                                {errors.lastName ?
                                    <span className="text-light">{errors.lastName}</span>
                                    : null}
                            </div>
                        </div>
                    </div>
                    <div className="row g-2 ">
                        <div className="col">
                            <div className="mb-3 ms-3 ">
                                <label className="form-label text-light ">Email :</label>
                                <input type='email'
                                    className="form-control"
                                    name="email"
                                    placeholder="name@example.com"
                                    value={values.email}
                                    onChange={handleChange}
                                />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                {errors.email ?
                                    <span className="text-light">{errors.email}</span>
                                    : null}
                            </div>
                        </div>
                        <div className="col-4">
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col ">
                            <div className="mb-5 g-2 ms-3">
                                <label className="form-label text-light ">City :</label>
                                <input type='text'
                                    className="form-control"
                                    name="city"
                                    placeholder="write here ..."
                                    value={values.city}
                                    onChange={handleChange}
                                />
                                {errors.city ?
                                    <span className="text-light">{errors.city}</span>
                                    : null}
                            </div>
                        </div>
                        <div className="col-4">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="mb-5 g-2 ms-3">
                                <label className="form-label text-light ">Phone number :</label>
                                <input type='text'
                                    className="form-control"
                                    name="phoneNumber"
                                    placeholder="write here ..."
                                    value={values.phoneNumber}
                                    onChange={handleChange}
                                />
                                {errors.phoneNumber ?
                                    <span className="text-light">{errors.phoneNumber}</span>
                                    : null}
                            </div>
                        </div>
                        <div className="col">
                            <div className="mb-5 g-2 ms-3">
                                <label className="form-label text-light ">ID :</label>
                                <input type='text'
                                    className="form-control"
                                    name="id"
                                    placeholder="write here ..."
                                    value={values.id}
                                    onChange={handleChange}
                                />
                                {errors.id ?
                                    <span className="text-light">{errors.id}</span>
                                    : null}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="mb-5 g-2 ms-3">
                                <label className="form-label text-light ">Gender :</label>
                                <select className="form-select form-select-sm"
                                    name="gender"
                                    value={values.gender}
                                    onChange={handleChange}
                                >
                                    <option defaultValue='select'>Open to select gender</option>
                                    <option value="1">male</option>
                                    <option value="2">female</option>
                                </select>
                                {errors.gender ?
                                    <span className="text-light">{errors.gender}</span>
                                    : null}
                            </div>
                        </div>
                        <div className="col-4"></div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-check form-switch mb-5 g-2 ms-3 ">
                                <label className="form-label text-light ">Accept the rules</label>
                                <input className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    name="acc"
                                    value={values.acc}
                                    onChange={handleChange}
                                />
                                {errors.acc ?
                                    <span className="text-light">{errors.acc}</span>
                                    : null}
                                <label className="form-check-label" >Default switch checkbox input</label>
                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        <div className="col ">
                            <div className="mb-5 ms-3">
                                <input type='submit' className="btn btn-light" name="submit" />
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </Formik>
    )
}
export default Form;