import React from 'react'
import { Formik } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
//import AutosizeTextarea from "./AutosizeTextarea";
export default function BasicFormComponents() {
    return (
        <div className="p-3">
            {/* <AutosizeTextarea className="form-control" onChange={(event) => console.log(event)} /> */}
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
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

                    /* and other goodies */
                }) => {

                    return (
                        <form onSubmit={handleSubmit} >
                            <div className="container" >
                                <div className="row mb-2">
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="form-control"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            placeholder="Email"
                                        />
                                        {errors.email && touched.email ? <div className="text-danger">{errors.email}</div> : null}
                                        {/* {errors.email && touched.email && errors.email} */}
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            className="form-control"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                            placeholder="Password"
                                        />
                                        {errors.password && touched.password ? <div className="text-danger">{errors.password}</div> : null}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <button type="submit" className={"btn btn-primary"} disabled={isSubmitting}>
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    );
                }}
            </Formik>
        </div>
    );
}
